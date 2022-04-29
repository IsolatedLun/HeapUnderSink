import { useEffect, useState } from 'react';
import { useGetQuestionsQuery } from '../../services/questionsService';
import Questions from '../Questions/Questions';
import FilterHeader from './FilterHeader/FilterHeader';
import { useFilter } from '../../hooks/useFilter';
import { INF_Question } from '../Questions/types';
import UnderPagination from '../Pagination/UnderPagination';

const Home = () => {
  const [questions, setQuestions] = useState<INF_Question[] | undefined>(undefined);
  const [setSort] = useFilter(questions, setQuestions);
  const [offset, setOffset] = useState(0);

  const { data } = useGetQuestionsQuery(offset);

  useEffect(() => {
    if(data)
      setQuestions(data.results);
  }, [data])

  return (
    <section className="[ questions__section ] [ margin-top-1 ]" aria-label='Questions section'>
      <FilterHeader 
      setSort={setSort} header={`${data?.count} Questions`}
      sortPlaceholder='Sort by title...' 
      sortTextKey='title' 
      filters={[
        { name: 'New', field: 'new' },
        { name: 'Popular', field: 'popular' },
        { name: 'Controversial', field: 'controversial' }
      ]}
      />

      <Questions questions={questions} />
      <UnderPagination { ...data! } setOffset={setOffset} />
    </section>
  )
}

export default Home