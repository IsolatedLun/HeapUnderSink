import React from 'react'
import QuestionUserPreview from '../../Questions/QuestionUserPreview'
import RatingController from '../RatingController'
import { INF_Answer } from '../types'

const Answer = (props: INF_Answer) => {
  return (
    <div className="[ answer ] [ flex flex-items fs-200 ]">
        <div className='[ flex flex-col gap-075 ]'>
            <RatingController model={props} modelType='answer' setModel={() => null} setRateType={() => null} />
            <QuestionUserPreview { ...props.user } isVertical={true}  />
        </div>

        <p>{ props.body }</p>
    </div>
  )
}

export default Answer