import React from 'react'
import Tag from './Tag'
import { INF_Tag } from './types'

const TagDetail = (props: INF_Tag) => {
  return (
    <li className='[ flex-align-center gap-025 ]'>
        <Tag { ...props } />
        <p className='[ fs-200 text-muted ]'>x { props.views }</p>
    </li>
  )
}

export default TagDetail