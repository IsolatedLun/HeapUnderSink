import React, { useEffect, useState } from 'react'
import { CHECK_ICON } from '../../../consts'
import { useRate } from '../../../hooks/useRate'
import { usePostAcceptAnswerMutation, usePostRateObjectMutation } from '../../../services/questionsService'
import IconButton from '../../Modules/Buttons/IconButton'
import QuestionUserPreview from '../../Questions/QuestionUserPreview'
import RatingController from '../RatingController'
import { INF_Answer } from '../types'

const Answer = (props: INF_Answer) => {
  const [answer, setAnswer] = useState(props);
  const [isAnswer, setIsAnswer] = useState(props.is_answer)
  const [controllerProps, object, type, hasVoted] = useRate(answer, setAnswer, 'answer');
  const [rateObject] = usePostRateObjectMutation();
  const [postAcceptAnswer] = usePostAcceptAnswerMutation();

  useEffect(() => {
    if(type === 'neutral' && hasVoted)
        rateObject(object)
            .unwrap()
            .then(res => console.log(res))
  }, [type])

  function handleAcceptingAnswer() {
    postAcceptAnswer({ answerId: answer.id, questionId: answer.question })
  }

  return (
    <div className="[ answer ] [ flex flex-items fs-200 bottom-border padding-block-1 ]">
        <div className='[ flex flex-col gap-075 ]'>
            <RatingController { ...controllerProps } />

            <QuestionUserPreview 
              { ...props.user } isVertical={true} 
                />

              { props.showControls && 
                <IconButton ariaLabel='Accept answer button' onClick={() => { 
                  handleAcceptingAnswer();
                  setIsAnswer(!isAnswer);
                }} 
                  variant={isAnswer ? 'action' : ''}>
                  { CHECK_ICON }
                  </IconButton> 
              }

          <IconButton ariaLabel='Reply to user' onClick={() => props.setReplyingTo(props.user.username)}>
            &#xf3e5;
          </IconButton>
        </div>

        <p>{ props.body }</p>
    </div>
  )
}

export default Answer