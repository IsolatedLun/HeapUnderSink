import React from 'react'
import Questions from '../../Questions/Questions'
import { INF_MeMain } from '../types'

const MeQuestions = (props: INF_MeMain) => {
  return (
    <div>
        <h2 className="[ bottom-border ]" data-border-variant='heading'>
            Questions by <span className="[ text-muted ]">{ props.user.username }</span>
        </h2>
        <Questions questions={props.user.questions} sortBy='date' />
    </div>
  )
}

export default MeQuestions