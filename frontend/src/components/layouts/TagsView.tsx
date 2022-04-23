import React, { useEffect, useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { useGetTagsQuery } from '../../services/questionsService'
import TagDetail from '../Modules/Tags/TagDetail'
import { INF_Tag } from '../Modules/Tags/types'
import FilterHeader from './FilterHeader/FilterHeader'
import QuestionHeader from './FilterHeader/FilterHeader'

const TagsView = () => {
  const { data } = useGetTagsQuery();
  const [tags, setTags] = useState<INF_Tag[] | undefined>(undefined);
  const [setSort] = useFilter(tags, setTags);

  useEffect(() => {
    if(data)
      setTags(data);
  }, [data])

  return (
    <section className='[ padding-block-1 ]' aria-label='Tags section'>
        <FilterHeader 
          setSort={setSort} header='Tags' 
          sortPlaceholder='Sort by tag name...' 
          sortTextKey='name' 
          filters={[
            { name: 'New', field: 'new' },
            { name: 'Popular', field: 'popular' },
          ]}
          />

        <div className='[ tags-grid ] [ gap-05 ]'>
            {
              tags?.map((tag, idx) => <TagDetail key={idx} { ...tag } />)
            }
        </div>
    </section>
  )
}

export default TagsView