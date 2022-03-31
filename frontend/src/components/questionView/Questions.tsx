import { INF_Question } from "./types";

const QuestionStat = ({ statNumber, statName }: { statNumber: number, statName: string }) => {
    return (
        <div className="question__stat">
            <p>{ statNumber }</p>
            <p>{ statName }</p>
        </div>
    )
}

const Question = ({ props } : { props: INF_Question }) => {
    const stats = [Object.entries(props.votes), Object.entries(props.answers), Object.entries(props.views)]
    return (
        <div className="question">
            <div className="[ question__stats ]"> 
                {
                    stats.map(stat => ( <QuestionStat statNumber={Number(stat[1])} statName={String(stat[0])} /> ))
                }
            </div>
            <div className="[ question__info ]">
                <a className="[ question__title ] [ header-500 ]"></a>
                <div className="[ question__details ]">
                    <div className="[ question__tags ]">

                    </div>
                    <div className="[ question__user ]">

                    </div>
                </div>
            </div>
        </div>
    )
}

const Questions = () => {
  return (
    <div>Questions</div>
  )
}

export default Questions