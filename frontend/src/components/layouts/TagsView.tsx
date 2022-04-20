import React from 'react'
import { useGetTagsQuery } from '../../services/questionsService'
import TagDetail from '../Modules/Tags/TagDetail'
import FilterHeader from './FilterHeader/FilterHeader'
import QuestionHeader from './FilterHeader/FilterHeader'

const TagsView = () => {
  const { data: tags } = useGetTagsQuery();

  return (
    <section className='[ padding-block-1 ]' aria-label='Tags section'>
        <FilterHeader setSort={() => null} header='Tags' sortPlaceholder='Sort by tag name...' />

        <div className='[ tags-grid ] [ gap-05 ]'>
            {
              tags?.map((tag, idx) => <TagDetail key={idx} { ...tag } />)
            }
        </div>
    </section>
  )
}

export default TagsView