import { Link } from 'react-router-dom'
import { LinkButtonProps } from './types'

const LinkButton = ({ children, props} : { props: LinkButtonProps, children: any }) => {
    const { variant, rest, to } = props;

  return (
    <Link 
        to={to} className='[ button ]' 
        data-variant={variant ? variant : 'default'}
        { ...rest }
        >
        { children }
    </Link>
  )
}

export default LinkButton