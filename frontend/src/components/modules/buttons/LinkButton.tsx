import { Link } from 'react-router-dom'
import { LinkButtonProps } from './types'

const LinkButton = (props: LinkButtonProps) => {
    const { variant, rest, to } = props;

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