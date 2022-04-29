import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH_ICON } from '../../../consts';
import IconButton from '../../Modules/Buttons/IconButton';
import DropDownContainer from '../../Modules/Dropdowns/DropDownContainer';
import DropDownItem from '../../Modules/Dropdowns/DropDownItem';
import SortBy from './SortBy';
import { INF_FilterHeader } from './types';

const FilterHeader = (props: INF_FilterHeader) => {
  const [inputVal, setInputVal] = useState('');

  return (
    <header aria-label='Questions header' data-flex-column-mobile
        className="[ questions__header ] [ flex flex-between margin-bottom-1 ]">

        <div className="[ flex-items ]">
          <h2>{ props.header }</h2>
          <Link to='/ask' className="[ button ]" data-variant='full-blue'>Ask question</Link>
        </div>
        <div className="[ flex-items ]" data-flex-column-mobile>

          <DropDownContainer item={<SortBy />}>
            {
              props.filters.map((item, idx) => (
                <DropDownItem key={idx} onClick={() => props.setSort(item.field)}>
                  { item.name }
                </DropDownItem>
              ))
            }
          </DropDownContainer>

          <div className="[ flex-items margin-inline-auto ]">
            <input type="text" className="[ input ] [ width-8rem ]" 
              placeholder={props.sortPlaceholder} onInput={(e) => setInputVal(e.currentTarget.value)} />

            <IconButton ariaLabel='Filter button'onClick={() =>
               props.setSort(`key_${props.sortTextKey}_${inputVal}`) }>
              { SEARCH_ICON }
            </IconButton>
          </div>
        </div>
      </header>
  )
}

export default FilterHeader;