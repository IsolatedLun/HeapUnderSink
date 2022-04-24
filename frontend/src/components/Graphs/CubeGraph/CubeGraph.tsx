import React from 'react'
import { monthNames } from '../../../consts';
import { createCubeGraphData } from '../funcs';
import { INF_CubeGraph } from '../types'
import Cube from './Cube';

const CubeGraph = (props: INF_CubeGraph) => {
  const [daysObj, month] = createCubeGraphData(props.data, props.dateKey);

  return (
    <div className="[ graph-container ] [ flex-col gap-025 ]">
      <p className='[ text-muted fs-200 white-space-nowrap ]'>Questions asked this month</p>
      <div className="[ cube-graph ] [ card ] [ flex flex-items flex-col ]">
        <h2 className='[ card__header ] [ text-center fs-500 ]'>{ monthNames[month] }</h2>
        <div className="[ cubes ]">
          {
              Object.entries(daysObj).map(([key, val]) => 
                <Cube key={`${val}-${key}`} amt={val} day={Number(key)} month={month} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CubeGraph;