import { useEffect, useState } from 'react';
import { useGetQuestionsQuery } from '../../services/questionsService';
import Questions from '../Questions/Questions';
import { INF_Question } from '../Questions/types';

const Home = () => {
  const { data } = useGetQuestionsQuery();
  const [questions, setQuestions] = useState<INF_Question[]>([]);

  useEffect(() => {
    if(data)
      setQuestions(data);
  }, [data])

  return (
    <Questions questions={questions} />
  )
}

export default Home