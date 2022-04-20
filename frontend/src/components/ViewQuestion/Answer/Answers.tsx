import React from 'react'
import { INF_Answer, INF_Answers } from '../types'
import Answer from './Answer';
import { shouldShowControls } from './funcs';

const Answers = (props: INF_Answers) => {
  return (
    <div className="[ answers ] [ margin-top-2 ]">
    {
        (props.question.answers as INF_Answer[]).map(answer => {
            const showAnswerControls = shouldShowControls(props.question, props.user, answer);
            return <Answer key={answer.id} { ...answer } showControls={showAnswerControls} />
        }
    )}
    </div>
  )
}

export default Answers