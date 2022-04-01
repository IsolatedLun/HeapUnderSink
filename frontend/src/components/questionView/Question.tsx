import { API_URL } from "../../consts";
import { INF_Question } from "./types";

function decorateStat(statNum: number, statName: 'views' | 'votes' | 'answers'): string {
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
        <div className="[ question ] [ flex flex-items flex-grow item-hoverable ]" data-hover-variant='light'>
            <div className="[ question__stats ] [ text-center ]"> 
                <div className="[ question__stat ]" data-stat-variant={decorateStat(props.votes, 'votes')}>
                    <p className="[ stat__num ]">{ props.votes }</p>
                    <p>votes</p>
                </div>
                <div className="[ question__stat ]" data-stat-variant={decorateStat(props.answers, 'answers')}>
                    <p className="[ stat__num ]">{ props.answers }</p>
                    <p>answers</p>
                </div>
                <div className="[ question__stat ]" data-stat-variant={decorateStat(props.views, 'views')}>
                    <p className="[ stat__num ]">{ props.views }</p>
                    <p>views</p>
                </div>
            </div>

            <div className="[ question__info ] [ flex flex-col flex-justify-between flex-grow ]">
                <a href={`/questions/${props.id}/${props.title}`}
                    className="[ question__title ] [ header-500 multi-ellipsis ]">{ props.title }</a>

                <div className="[ question__details ] [ flex flex-between ]">
                    <div className="[ question__tags ]">
                        {
                            (props.tags && props.tags.map(
                                tag => ( <p className="[ question__tag ] [ tag ]">{ tag.name }</p> )))
                        }
                    </div>
                    <div className="[ question__user ] [ flex flex-items flex-align-center ]">
                        <img className="[ question__user-profile ] [ profile ]" 
                            src="https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png" data-profile-variant='beveled'
                            alt={props.user.username + "'s profile"} />

                        <a className="[ question__username ]" href={`/users/${props.user.id}/${props.user.username}`}
                            data-default>{ props.user.username }</a>
                    </div>
                </div>
            </div>
        </div>
    )
}