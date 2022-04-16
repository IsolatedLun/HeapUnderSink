import { Link } from 'react-router-dom'
import { INF_Tag } from './types'

const Tag = (props: INF_Tag) => {
  return (
    <Link to={`/tags/${props.name}`} 
      className="[ question__tag ] [ tag flex gap-025 ]" 
      data-dead={props.isDead}>

      <p>{ props.name }</p>
    </Link>
  )
}

export default Tag