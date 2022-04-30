import { useState } from "react";
import { Question } from "./Question";
import { INF_Question } from "./types";

const Questions = ({ questions } : { questions: INF_Question[] | undefined }) => {

  return (
      <div className="[ questions ]">
        {
          questions && questions.length !== 0
          ? questions.map((question, idx) => <Question key={question.id} { ...question } />)
          : <p><code>No questions found.</code></p>
        }
      </div>
  )
}

export default Questions;