import React from 'react'
import { INF_User } from '../../features/types'
import { humanizeNumber } from '../../utilFuncs/utils'
import Profile from '../Modules/Profiles/Profile'
import { INF_QuestionUserPreview } from './types'

const QuestionUserPreview = (props: INF_QuestionUserPreview) => {
  return (
    <div className={`[ question__user ] [ flex flex-items flex-align-center 
        ${props.isVertical && 'flex-col gap-05 fs-200'} ]`}>

        <Profile profile={{ url: props.profile, alt: props.username + '\'s profile' }} />

        <a className="[ question__username single-ellipsis ]" href={`/users/${props.id}/${props.username}`}
            data-default>{ props.username }</a>
        <p className="[ text-muted ]">{ humanizeNumber(props.reputation) }</p>
    </div>
  )
}

export default QuestionUserPreview