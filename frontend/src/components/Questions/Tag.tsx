import { Link } from 'react-router-dom'
import { INF_Tag } from './types'

const Tag = ({ tag } : { tag: INF_Tag }) => {
  return (
    <Link to={`/tags/${tag.name}`} 
      className="[ question__tag ] [ tag flex gap-025 ]" 
      tag-variant={tag.isDead ? 'dead': 'default'}>

      <p>{ tag.name }</p>
    </Link>
  )
}

export default Tag