import React from 'react'
import { INF_DropDownItem } from './interfaces'

const DropDownItem = (props: INF_DropDownItem) => {
  return (
    <li className="[ dropdown__item ] [ flex-items flex-align-center ]">
        <span className=" [ fa ] [ icon ]">{ props.leftIcon }</span>
        { props.children }
        <span className="[ fa ] [ icon ]">{ props.rightIcon }</span>
    </li>
  )
}

export default DropDownItem