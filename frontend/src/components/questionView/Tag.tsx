import { Link } from 'react-router-dom'
import { INF_Tag } from './types'

const Tag = ({ tag } : { tag: INF_Tag }) => {
  return (
    <Link to={`/tags/${tag.name}`} className="[ question__tag ] [ tag ]">{ tag.name }</Link>
  )
}

export default Tag