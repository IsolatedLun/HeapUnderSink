import React from 'react'
import Tag from './Tag'
import { INF_Tag } from './types'

const QuestionTags = ({ tags } : { tags: INF_Tag[] }) => {
    if(tags.length > 0)
        return (
            <div className="[ question__tags ] [ flex-items flex-wrap ]">
                {
                    ( tags && tags.map( tag => <Tag tag={tag} /> ) )
                }
            </div>
        )
    else
        return (
            <Tag tag={{ name: 'No tags', views: 0, isDead: true }} />
        )

}

export default QuestionTags