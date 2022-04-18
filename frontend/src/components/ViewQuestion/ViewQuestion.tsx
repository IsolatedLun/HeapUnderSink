import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useLoggedAction } from '../../hooks/useLoggedAction';
import { useGetQuestionQuery } from '../../services/questionsService';
import { humanizeNumber } from '../../utilFuncs/utils';
import Button from '../Modules/Buttons/Button';
import QuestionUserPreview from '../Questions/QuestionUserPreview';
import { INF_Question } from '../Questions/types';
import Answer from './Answer/Answer';
import AnswerForm from './AnswerForm';
import RatingController from './RatingController';
import { INF_Answer } from './types';

const ViewQuestion = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState<INF_Question | undefined>(undefined);
    const [showForm, setShowForm] = useState(false);
    const { data, isSuccess } = useGetQuestionQuery(Number(id));

    useEffect(() => {
        if(isSuccess)
            setQuestion(data);
    }, [data])

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
                    <RatingController model={question} modelType='question' 
                        setRateType={() => null} setModel={() => null} />

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
            
            { showForm && <AnswerForm /> }

            <div className="[ answers ] [ margin-top-2 ]">
                {
                    (question.answers as INF_Answer[]).map(answer => <Answer { ...answer } />)
                }
            </div>
        </div>
        )
    else
        return <>Loading...</>
}

export default ViewQuestion