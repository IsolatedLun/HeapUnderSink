import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CARET_DOWN_ICON, CARET_UP_ICON } from '../../consts';
import { useGetQuestionQuery } from '../../services/questionsService';
import { humanizeNumber } from '../../utilFuncs/utils';
import IconButton from '../Modules/Buttons/IconButton';
import { decorateStat } from '../Questions/Stat';
import { INF_Question } from '../Questions/types';

const ViewQuestion = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState<INF_Question | undefined>(undefined);
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
                    <IconButton ariaLabel='Upvote question' onClick={() => null}>
                        { CARET_UP_ICON }
                    </IconButton>
                    <p className='[ stat ]' data-stat-variant={decorateStat(question.votes, 'votes')}>
                        { humanizeNumber(question.votes) }
                    </p>
                    <IconButton ariaLabel='Downvote question' onClick={() => null}>
                        { CARET_DOWN_ICON }
                    </IconButton>
                </div>
                <div className="question__body">
                    { question.body }
                </div>
            </div>

        </div>
        )
    else
        return <>Loading...</>
}

export default ViewQuestion