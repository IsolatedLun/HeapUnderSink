import { useEffect, useState } from 'react';
import { useGetQuestionsQuery } from '../../services/questionsService';
import Questions from '../Questions/Questions';
import FilterHeader from './FilterHeader/FilterHeader';
import { useFilter } from '../../hooks/useFilter';
import { INF_Question } from '../Questions/types';

const Home = () => {
  const { data } = useGetQuestionsQuery();
  const [questions, setQuestions] = useState<INF_Question[] | undefined>(undefined);
  const [setSort] = useFilter(questions, setQuestions);

  useEffect(() => {
    if(data)
      setQuestions(data)
  }, [data])

  return (
    <section className="[ questions__section ] [ margin-top-1 ]" aria-label='Questions section'>
      <FilterHeader 
      setSort={setSort} header='Questions' 
      sortPlaceholder='Sort by title...' 
      sortTextKey='title' 
      filters={[
        { name: 'New', field: 'new' },
        { name: 'Popular', field: 'popular' },
        { name: 'Controversial', field: 'controversial' }
      ]}
      />

      <Questions questions={questions} />
    </section>
  )
}

export default Home