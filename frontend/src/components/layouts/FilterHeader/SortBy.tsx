import { SORT_ICON } from '../../../consts';

const SortBy = () => {
  return (
    <div className='[ flex flex-align-center gap-05 fs-500 ]'>
      <p>Sort</p>
      <i className='fa'>{ SORT_ICON }</i>
    </div>
  )
}
export default SortBy;