import { Link } from "react-router-dom";
import { humanizeNumber } from "../../utilFuncs/utils";
import Profile from "../Modules/Profiles/Profile";
import QuestionTags from "./QuestionTags";
import { Stat } from "./Stat";
import { INF_Question } from "./types";

export const Question = ({ props } : { props: INF_Question }) => {

    return (
        <div className="[ question ] [ flex flex-items flex-grow item-hoverable width-1fr ]" data-hover-variant='light'>
            <div className="[ question__stats ] [ text-center ]"> 
                <Stat stat={{ name: 'votes', num: props.votes }} />
                <Stat stat={{ name: 'answers', num: props.answers }} />
                <Stat stat={{ name: 'views', num: props.views }} />
            </div>

            <div className="[ question__info ] [ flex flex-col flex-justify-between flex-grow ]">
                <Link to={`/questions/${props.id}/${props.title}`}
                    className="[ question__title ] [ header-500 multi-ellipsis ]">{ props.title }</Link>

                <div className="[ question__details ] [ flex flex-between margin-top-1 ]">
                    <QuestionTags tags={props.tags} />
                    
                    <div className="[ question__user ] [ flex flex-items flex-align-center ]">
                        <Profile profile={{ url: props.user.profile, alt: props.user.username + '\'s profile' }} />

                        <a className="[ question__username ]" href={`/users/${props.user.id}/${props.user.username}`}
                            data-default>{ props.user.username }</a>
                        <p className="[ text-muted ]">{ humanizeNumber(props.user.reputation) }</p>
                    </div>
                </div>

            </div>
        </div>
    )
}