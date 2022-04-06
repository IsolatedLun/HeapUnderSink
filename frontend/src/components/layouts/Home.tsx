import React, { useEffect, useState } from 'react'
import { useGetQuestionsQuery } from '../../services/questionsService'
import DisplayOrLoad from '../misc/DisplayOrLoad'
import Questions from '../questionView/Questions'
import { INF_Question } from '../questionView/types'

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