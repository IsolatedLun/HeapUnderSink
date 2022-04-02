import { Link } from "react-router-dom";
import { FILTER_ICON } from "../../consts";
import { Question } from "./Question";
import { INF_Question } from "./types";

const Questions = () => {
  return (
    <section className="[ questions__section ] [ margin-top-1 ]" aria-label='Questions section'>
      <header aria-label='Questions header' data-flex-column-mobile
        className="[ questions__header ] [ flex flex-between margin-bottom-1 ]">

        <div className="[ flex-items ]">
          <h2>Questions</h2>
          <Link to='/add-question' className="[ button ]" data-variant='full-blue'>Ask question</Link>
        </div>
        <div className="[ flex-items ]" data-flex-column-mobile>
          <ul aria-label="Questions filter buttons" className="[ bordered-list flex ]">
            <li className="[ item-hoverable ]" data-hover='light'><button>Most popular</button></li>
            <li className="[ item-hoverable ]" data-hover='light'><button>New</button></li>
            <li className="[ item-hoverable ]" data-hover='light'><button>Bountied</button></li>
          </ul>

          <div className="[ flex-items margin-inline-auto ]">
            <input type="text" className="[ input ] [ width-8rem ]" placeholder="Sort by tag..." />
            <button className="[ button fa ]" aria-label='Filter button' aria-hidden>{ FILTER_ICON }</button>
          </div>
        </div>
      </header>

      <div className="[ questions ]">

      </div>
    </section>
  )
}

export default Questions