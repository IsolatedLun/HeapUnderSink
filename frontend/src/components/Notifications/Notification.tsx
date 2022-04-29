import React from 'react'
import { INF_Notification } from './types'

const Notification = (props: INF_Notification) => {
  return (
    <div className='[ notification ]'>
        <p className='[ text-muted fs-200 text-center ]'>"{ props.question.title }"</p>
        <p className='[ flex-align-center ] [ gap-05 ]'>
            <span className="[ tag ] [ notification_user ]">@{ props.sender.username }</span> 
            <span className="line-break" data-line-variant='horizontal'></span> 
            <span className="[ notification__text ] [ single-ellipsis ]">{ props.text }</span>
        </p>
    </div>
  )
}

export default Notification