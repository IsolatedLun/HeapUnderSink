import { Link } from "react-router-dom";
import { humanizeNumber } from "../../utilFuncs/utils";
import Profile from "../Modules/Profiles/Profile";
import QuestionTags from "./QuestionTags";
import QuestionUserPreview from "./QuestionUserPreview";
import { Stat } from "./Stat";
import { INF_Question } from "./types";

export const Question = ({ props } : { props: INF_Question }) => {

    return (
        <div className="[ question ] [ flex flex-items flex-grow item-hoverable width-1fr bottom-border ]" data-hover-variant='light'>
            <div className="[ question__stats ] [ text-center ]"> 
                <Stat name="votes" num={props.votes} bool={undefined} />
                <Stat name="answers" num={props.answers as number} bool={props.answered}  />
                <Stat name='views' num={props.views} bool={undefined} />
            </div>

            <div className="[ question__info ] [ flex flex-col flex-justify-between flex-grow ]">
                <Link to={`/questions/${props.id}/${props.title}`}
                    className="[ question__title ] [ header-500 multi-ellipsis ]">{ props.title }</Link>

                <div className="[ question__details ] [ flex flex-between margin-top-1 ]">
                    <QuestionTags tags={props.tags} />
                    
                    { props.user && <QuestionUserPreview { ...props.user } /> }
                </div>

            </div>
        </div>
    )
}