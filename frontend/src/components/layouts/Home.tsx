import { useEffect, useState } from 'react';
import { useGetQuestionsQuery } from '../../services/questionsService';
import QuestionHeader from '../Questions/QuestionHeader';
import Questions from '../Questions/Questions';
import { INF_Question } from '../Questions/types';

const Home = () => {
  const { data } = useGetQuestionsQuery();
  const [questions, setQuestions] = useState<INF_Question[]>([]);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    if(data)
      setQuestions(data);
  }, [data])

  return (
    <section className="[ questions__section ] [ margin-top-1 ]" aria-label='Questions section'>
      <QuestionHeader setSort={setSortBy} />

      <Questions questions={questions} sortBy={sortBy} />
    </section>
  )
}

export default Home