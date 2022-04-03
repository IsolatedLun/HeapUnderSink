import { Link } from "react-router-dom";
import { FILTER_ICON } from "../../consts";
import IconButton from "../modules/buttons/IconButton";
import { Question } from "./Question";
import QuestionHeader from "./QuestionHeader";
import { INF_Question } from "./types";

const Questions = ({ questions } : { questions: INF_Question[] }) => {
  return (
    <section className="[ questions__section ] [ margin-top-1 ]" aria-label='Questions section'>
      <QuestionHeader />

      <div className="[ questions ]">
        {
          questions.length !== 0
          ? questions.map(question => <Question props={{ ...question }} />)
          : <p>No questions found.</p>
        }
      </div>
    </section>
  )
}

export default Questions