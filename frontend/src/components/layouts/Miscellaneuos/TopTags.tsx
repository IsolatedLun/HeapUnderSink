import React from 'react'
import { useGetTopTagsQuery } from '../../../services/questionsService'
import Tag from '../../Modules/Tags/Tag'
import TagDetail from '../../Modules/Tags/TagDetail'
import Card from '../Cards/Card'

const TopTags = () => {
    const { data: tags } = useGetTopTagsQuery();

    if(tags)
        return (
            <Card title='Top 10 tags'>
                <ul className="[ tag-list ] [ flex-col gap-05 ]">
                    {
                        tags.map(tag => <TagDetail { ...tag } />)
                    }
                </ul>
            </Card>
        )
    else
        return <>Loading...</>
}

export default TopTags