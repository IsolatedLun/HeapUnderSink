import React from 'react'
import { INF_Tooltip } from './types'

const Tooltip = (props: INF_Tooltip) => {
  return (
    <div className='[ tooltip ] [ fs-200 ]'>
        { props.children }
    </div>
  )
}

export default Tooltip