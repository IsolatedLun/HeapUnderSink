import { Link } from 'react-router-dom'
import { LinkButtonProps } from './types'

const LinkButton = (props: LinkButtonProps) => {
  let { variant, rest, to } = props;

  if(props.next)
    to = to += `?next=${props.next}`;

  return (
    <Link 
        to={to} className='[ button ]' 
        data-variant={variant ? variant : 'default'}
        { ...rest }
        >
        { props.children }
    </Link>
  )
}

export default LinkButton