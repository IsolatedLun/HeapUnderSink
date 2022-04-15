import { Link } from 'react-router-dom'
import { INF_DropDownItem } from './interfaces'

const DropDownItem = (props: INF_DropDownItem) => {
  const rest = props.onClick ? { 
    'onClick': () => props.onClick!(),
    'onKeyDown': (e: React.KeyboardEvent<any>) => { if(e.key === 'Enter') props.onClick!() } 
  } : null;

  const el = (
    <li tabIndex={0} {...rest}
      className="[ dropdown__item ] [ flex-items flex-align-center ]" 
      data-variant={props.variant ? props.variant : ''}>

        <span className=" [ fa ] [ icon ]" aria-hidden>{ props.leftIcon }</span>
        { props.children }
        <span className="[ fa ] [ icon ]" aria-hidden>{ props.rightIcon }</span>

    </li>
  )

  if(props.to)
    return (
      <Link to={props.to}>{ el }</Link>
    )
  else
    return el;
}

export default DropDownItem