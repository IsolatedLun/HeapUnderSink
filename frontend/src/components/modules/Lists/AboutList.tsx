import { INF_ChildrenProps } from '../../../interfaces'
import { INF_AboutListItem } from './types'

export const AboutListItem = (props: INF_AboutListItem) => {
    return (
        <li className='[ flex-align-center gap-05 ]'>
            <span className="[ fa ] [ text-muted ]">{ props.icon }</span>
            <p><span className='text-muted'>{ props.text } |</span> { props.children }</p>
        </li>
    )
}

const AboutList = (props: INF_ChildrenProps) => {
  return (
    <ul className='[ about-list ] [ margin-block-1 flex-col gap-05 ]'>
        { props.children }
    </ul>
  )
}

export default AboutList;