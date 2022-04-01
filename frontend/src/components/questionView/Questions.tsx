import { Question } from "./Question";
import { INF_Question } from "./types";

const Questions = () => {
  return (
    <section className="[ questions__section ] [ margin-top-1 ]" aria-label='Questions section'>
      <header aria-label='Questions header' className="[ questions__header ] [ flex flex-between margin-bottom-1 ]">
        <h2>Questions</h2>
        <ul aria-label="Questions filter buttons" className="[ bordered-list flex ]">
          <li className="[ item-hoverable ]" data-hover='light'><button>Most popular</button></li>
          <li className="[ item-hoverable ]" data-hover='light'><button>New</button></li>
          <li className="[ item-hoverable ]" data-hover='light'><button>Bountied</button></li>
        </ul>
      </header>

      <div className="[ questions ]">
        
      </div>
    </section>
  )
}

export default Questions