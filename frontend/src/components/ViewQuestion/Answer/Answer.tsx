import React, { useState } from 'react'
import { useRate } from '../../../hooks/useRate'
import QuestionUserPreview from '../../Questions/QuestionUserPreview'
import RatingController from '../RatingController'
import { INF_Answer } from '../types'

const Answer = (props: INF_Answer) => {
  const [answer, setAnswer] = useState(props);
  const [controllerProps] = useRate(answer, setAnswer, 'answer');

  return (
    <div className="[ answer ] [ flex flex-items fs-200 bottom-border padding-block-1 ]">
        <div className='[ flex flex-col gap-075 ]'>
            <RatingController { ...controllerProps } />
            <QuestionUserPreview { ...props.user } isVertical={true}  />
        </div>

        <p>{ props.body }</p>
    </div>
  )
}

export default Answer