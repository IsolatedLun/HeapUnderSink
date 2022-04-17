import React from 'react'
import Tag from './Tag'
import { INF_Tag } from './types'

const TagDetail = (props: INF_Tag) => {
  return (
    <div className="[ tag-detail ] [ flex-col gap-05 ]">
        <Tag { ...props } />
        <p className="[ tag__description ] [ fs-200 text-muted ]">{ props.description }</p>
        <p className='[ fs-200 text-muted ]'>{ props.views } views</p>
    </div>
  )
}

export default TagDetail