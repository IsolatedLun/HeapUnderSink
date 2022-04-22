import { CSSProperties } from 'react';
import { monthNames } from '../../../consts';
import Tooltip from '../../Modules/Tooltips/Tooltip';
import { INF_Cube } from '../types';

const Cube = (props: INF_Cube) => {
    const style = { "--opacity": props.amt / 6 } as CSSProperties;

  return (
    <div className='[ cube ] [ overlay tooltip-parent ] [ pos-relative cursor-pointer ]' style={style}>
      <Tooltip>
        <p className='[ white-space-nowrap ]'>
          { props.amt } questions on { monthNames[props.month] } { props.day }
        </p>
      </Tooltip>
    </div>
  )
}

export default Cube;