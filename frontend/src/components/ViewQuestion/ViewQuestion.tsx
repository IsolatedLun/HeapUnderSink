import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useLoggedActions } from '../../hooks/useLoggedActions';
import { useRate } from '../../hooks/useRate';
import { useGetQuestionQuery, usePostRateObjectMutation, usePostReportQuestionMutation } from '../../services/questionsService';
import Button from '../Modules/Buttons/Button';
import MarkDown from '../Modules/MarkDown';
import QuestionUserPreview from '../Questions/QuestionUserPreview';
import { INF_Question } from '../Questions/types';
import Answers from './Answer/Answers';
import AnswerForm from './AnswerForm';
import RatingController from './RatingController';
import ViewQuestionHeader from './ViewQuestionHeader';

const ViewQuestion = () => {
    const { id } = useParams();
    const [user] = useAuth();
    const [question, setQuestion] = useState<INF_Question | undefined>(undefined);
    const [showForm, setShowForm] = useState(false);
    const [hasReported, setHasReported] = useState(false);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    
    const [controllerProps, object, type, hasVoted] = useRate(question!, setQuestion, 'question');
    const [ratingCb] = useLoggedActions(handleRating);

    const { data, isSuccess } = useGetQuestionQuery(Number(id));
    const [rateObject] = usePostRateObjectMutation();
    const [reportQuestion] = usePostReportQuestionMutation();

    function handleRating() {
        rateObject(object)
    }

    function handleReport() {
        if(question)
            reportQuestion(question.id)
                .then(res => setQuestion(prevState => ({
                    ...question, reports: prevState!.reports + 1
                })));
        setHasReported(true);
    }

    useEffect(() => {
        if(isSuccess)
            setQuestion(data);
    }, [data])

    useEffect(() => {
        setShowForm(false);
    }, [question?.answers])

    useEffect(() => {
        if(!showForm)
            setReplyingTo(null);
    }, [showForm])

    useEffect(() => {
        if(replyingTo && replyingTo.length > 0) {
            setShowForm(true);
        }
    }, [replyingTo])

    useEffect(() => {
        if(type === 'neutral' && hasVoted)
            ratingCb();
    }, [type])

    if(question)
        return (
        <div className='question-view'>
            <ViewQuestionHeader { ...question } />

            <div className='[ view__question ] [ flex flex-items bottom-border ]'>
                <div className="[ question__controls ] [ flex-items flex-col text-center fs-500 ]">
                    <RatingController { ...controllerProps } />

                    <QuestionUserPreview { ...question.user } isVertical={true} />
                </div>

                <div className="[ question__body ] [ width-100 text-start ]">
                    <MarkDown text={question.body} showBackground={false} />
                </div>

            </div>
            
            <ul className="[ button-group ] [ margin-top-1 ]">
                <li>
                    <Button onClick={() => { setReplyingTo(question.user.username) }}>
                        Answer
                    </Button>
                </li>
                <li>
                    <Button rest={{ 'data-dead': hasReported }} onClick={handleReport} variant='red'>
                        Report
                    </Button>
                </li>
            </ul>
            
            { showForm && <AnswerForm question={question} setQuestion={setQuestion} 
                replyingTo={replyingTo} setReplyingTo={setReplyingTo} /> }

            <Answers question={question} user={user} setReplyingTo={setReplyingTo} />
        </div>
        )
    else
        return <>Loading...</>
}

export default ViewQuestion;