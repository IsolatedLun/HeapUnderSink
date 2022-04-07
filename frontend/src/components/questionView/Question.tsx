import { Link } from "react-router-dom";
import { API_URL } from "../../consts";
import { humanizeNumber } from "../../utilFuncs/utils";
import QuestionTags from "./QuestionTags";
import { INF_Question } from "./types";

export function decorateStat(statNum: number | string, statName: 'views' | 'votes' | 'answers'): string {
    statNum = Number(statNum);
   
    if(statName === 'views' && statNum >= 1000)
        return 'popular';
    else if(statName === 'answers' && statNum > 0)
        return 'answering';
    else if(statName === 'votes' && statNum >= 1000)
        return 'popular';
    
    return 'default';
}

export const Question = ({ props } : { props: INF_Question }) => {

    return (
        <div className="[ question ] [ flex flex-items flex-grow item-hoverable width-1fr ]" data-hover-variant='light'>
            <div className="[ question__stats ] [ text-center ]"> 
                <div className="[ question__stat ]" data-stat-variant={decorateStat(props.votes, 'votes')}>
                    <p className="[ stat__num ]">{ humanizeNumber(props.votes) }</p>
                    <p>votes</p>
                </div>

                <div className="[ question__stat ]" data-stat-variant={props.answered 
                        ? 'answered' 
                        : decorateStat(props.answers, 'answers')}>
                    <p className="[ stat__num ]">{ humanizeNumber(props.answers) }</p>
                    <p>answers</p>
                </div>

                <div className="[ question__stat ]" data-stat-variant={decorateStat(props.views, 'views')}>
                    <p className="[ stat__num ]">{ humanizeNumber(props.views) }</p>
                    <p>views</p>
                </div>
            </div>

            <div className="[ question__info ] [ flex flex-col flex-justify-between flex-grow ]">
                <Link to={`/questions/${props.id}/${props.title}`}
                    className="[ question__title ] [ header-500 multi-ellipsis ]">{ props.title }</Link>

                <div className="[ question__details ] [ flex flex-between margin-top-1 ]">
                    <QuestionTags tags={props.tags} />
                    
                    <div className="[ question__user ] [ flex flex-items flex-align-center ]">
                        <img className="[ question__user-profile ] [ profile ]" 
                            src={API_URL + props.user.profile} data-profile-variant='beveled'
                            alt={props.user.username + "'s profile"} />

                        <a className="[ question__username ]" href={`/users/${props.user.id}/${props.user.username}`}
                            data-default>{ props.user.username }</a>
                        <p className="[ text-muted ]">{ humanizeNumber(props.user.reputation) }</p>
                    </div>
                </div>

            </div>
        </div>
    )
}