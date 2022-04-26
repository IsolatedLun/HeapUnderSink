import React from 'react'
import { WARNING_ICON } from '../../../consts'
import Tooltip from './Tooltip'
import { INF_IconTooltip } from './types'

const IconTooltip = (props: INF_IconTooltip) => {
  return (
    <div className='[ icon-tooltip ] [ tooltip-parent ] [ pos-relative cursor-pointer ]'>
        <p className={`[ fa ]  [ ${props.color} ]`}>{ props.icon }</p>
        { props.children }
    </div>
  )
}

export default IconTooltip