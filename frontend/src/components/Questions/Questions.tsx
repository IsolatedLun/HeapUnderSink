import { useEffect, useState } from "react";
import { filterBountied, sortByDate, sortByViews, sortByVotes } from "./funcs";
import { Question } from "./Question";
import { INF_Question } from "./types";

const Questions = ({ questions, sortBy } : { questions: INF_Question[], sortBy: string }) => {
  const [currQuestions, setCurrQuestions] = useState<INF_Question[]>([]);

  useEffect(() => {
    setCurrQuestions(questions);
  }, [questions])

  useEffect(() => {
    if(sortBy === 'popular')
      sortByViews(setCurrQuestions);
    else if(sortBy === 'votes')
      sortByVotes(setCurrQuestions);
    else if(sortBy === 'date')
      sortByDate(setCurrQuestions);
    else if(sortBy === 'bountied')
      filterBountied(setCurrQuestions);
  }, [sortBy])

  return (
      <div className="[ questions ]">
        {
          currQuestions.length !== 0
          ? currQuestions.map((question, idx) => <Question key={question.id} props={{ ...question }} />)
          : <p><code>No questions found.</code></p>
        }
      </div>
  )
}

export default Questions;