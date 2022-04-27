import React from 'react'
import { INF_Tooltip } from './types'

const Tooltip = (props: INF_Tooltip) => {
  return (
    <div className='[ tooltip card ] [ fs-300 ]' data-card-variant={props.variant ? props.variant : 'default'}>
        { props.children }
    </div>
  )
}

export default Tooltip