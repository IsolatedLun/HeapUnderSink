import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useLoggedActions } from '../../hooks/useLoggedActions';
import { useRate } from '../../hooks/useRate';
import { useGetQuestionQuery, usePostRateObjectMutation } from '../../services/questionsService';
import { humanizeNumber } from '../../utilFuncs/utils';
import Button from '../Modules/Buttons/Button';
import QuestionUserPreview from '../Questions/QuestionUserPreview';
import { INF_Question } from '../Questions/types';
import Answer from './Answer/Answer';
import Answers from './Answer/Answers';
import AnswerForm from './AnswerForm';
import RatingController from './RatingController';

const ViewQuestion = () => {
    const { id } = useParams();
    const [user] = useAuth();
    const [question, setQuestion] = useState<INF_Question | undefined>(undefined);
    const [showForm, setShowForm] = useState(false);
    const [controllerProps, object, type, hasVoted] = useRate(question!, setQuestion, 'question');
    const [ratingCb] = useLoggedActions(handleRating);

    const { data, isSuccess } = useGetQuestionQuery(Number(id));
    const [rateObject] = usePostRateObjectMutation();

    function handleRating() {
        rateObject(object)
    }

    useEffect(() => {
        if(isSuccess)
            setQuestion(data);
    }, [data])

    useEffect(() => {
        setShowForm(false);
    }, [question?.answers])

    useEffect(() => {
        if(type === 'neutral' && hasVoted)
            ratingCb();
    }, [type])

    if(question)
        return (
        <div className='question-view'>
            <header className='[ question__header ] [ flow text-center bottom-border margin-bottom-1 ]'>
                <h1 className='[ text-center multi-ellipsis fw-normal ]'>{ question.title }</h1>
                <div className="[ question__info ] [ flex flex-justify-center flex-items ]">
                    <p><span className="[ text-muted ]">Created</span> { question.created_at }</p>
                    <p><span className="[ text-muted ]">Modified</span> { question.modified_at }</p>
                    <p><span className="[ text-muted ]">Viewed</span> { humanizeNumber(question.views) } times</p>
                </div>
            </header>

            <div className='[ view__question ] [ flex flex-items text-center bottom-border ]'>
                <div className="[ question__controls ] [ flex-items flex-col fs-500 ]">
                    <RatingController { ...controllerProps } />

                    <QuestionUserPreview { ...question.user } isVertical={true} />
                </div>

                <div className="question__body">
                    { question.body }
                </div>

            </div>
            
            <ul className="[ button-group ] [ margin-top-1 ]">
                <li>
                    <Button onClick={() => setShowForm(!showForm)}>Answer</Button>
                </li>
                <li>
                    <Button onClick={() => null} variant='red'>Report</Button>
                </li>
            </ul>
            
            { showForm && <AnswerForm question={question} setQuestion={setQuestion} /> }

            <Answers question={question} user={user} />
        </div>
        )
    else
        return <>Loading...</>
}

export default ViewQuestion;