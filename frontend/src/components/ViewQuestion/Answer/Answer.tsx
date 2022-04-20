import React, { useEffect, useState } from 'react'
import { useRate } from '../../../hooks/useRate'
import { usePostRateObjectMutation } from '../../../services/questionsService'
import QuestionUserPreview from '../../Questions/QuestionUserPreview'
import RatingController from '../RatingController'
import { INF_Answer } from '../types'

const Answer = (props: INF_Answer) => {
  const [answer, setAnswer] = useState(props);
  const [controllerProps, object, type, hasVoted] = useRate(answer, setAnswer, 'answer');
  const [rateObject] = usePostRateObjectMutation();

  useEffect(() => {
    if(type === 'neutral' && hasVoted)
        rateObject(object)
            .unwrap()
            .then(res => console.log(res))
  }, [type])

  return (
    <div className="[ answer ] [ flex flex-items fs-200 bottom-border padding-block-1 ]">
        <div className='[ flex flex-col gap-075 ]'>
            <RatingController { ...controllerProps } />

            <QuestionUserPreview 
              { ...props.user } isVertical={true} 
                />

              <p>{ props.showControls ? 'ACCEPT AS ANSWER' : '' }</p>
        </div>

        <p>{ props.body }</p>
    </div>
  )
}

export default Answer