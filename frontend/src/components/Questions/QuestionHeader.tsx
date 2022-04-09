import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FILTER_ICON } from '../../consts';
import Button from '../Modules/Buttons/Button';
import IconButton from '../Modules/Buttons/IconButton';

const QuestionHeader = ({ setSort } : { setSort: Function }) => {
  return (
    <header aria-label='Questions header' data-flex-column-mobile
        className="[ questions__header ] [ flex flex-between margin-bottom-1 ]">

        <div className="[ flex-items ]">
          <h2>Questions</h2>
          <Link to='/add-question' className="[ button ]" data-variant='full-blue'>Ask question</Link>
        </div>
        <div className="[ flex-items ]" data-flex-column-mobile>
          <ul aria-label="Questions filter buttons" className="[ bordered-list flex ]">
            <li className="[ item-hoverable ]" data-hover='light'>
              <Button props={{ onClick: () => setSort('popular'), variant: 'empty' }}>
                Most popular
              </Button>
            </li>
            <li className="[ item-hoverable ]" data-hover='light'>
              <Button props={{ onClick: () => setSort('bountied'), variant: 'empty' }}>
                Bountied
              </Button>
            </li>
            <li className="[ item-hoverable ]" data-hover='light'>
              <Button props={{ onClick: () => setSort('new'), variant: 'empty' }}>
                New
              </Button>
            </li>
          </ul>

          <div className="[ flex-items margin-inline-auto ]">
            <input type="text" className="[ input ] [ width-8rem ]" placeholder="Sort by tag..." />
            <IconButton props={{ ariaLabel: 'Filter button', onClick: () => null }}>
              { FILTER_ICON }
            </IconButton>
          </div>
        </div>
      </header>
  )
}

export default QuestionHeader;