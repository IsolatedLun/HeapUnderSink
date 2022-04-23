import { Link } from 'react-router-dom';
import { humanizeNumber } from '../../utilFuncs/utils';
import Profile from '../Modules/Profiles/Profile';
import { INF_QuestionUserPreview } from './types';

const QuestionUserPreview = (props: INF_QuestionUserPreview) => {
  return (
    <div className={`[ question__user ] [ flex flex-items flex-align-center 
        ${props.isVertical && 'flex-col gap-05 fs-200'} ]`}>

        <Profile url={props.profile} data-size='large' alt={`${props.username}'s profile`} />

        <Link 
          className="[ question__username single-ellipsis max-width-15ch ]" 
          to={`/me/${props.id}`}
          data-default>
              { props.username }
        </Link>
        <p className="[ text-muted ]">{ humanizeNumber(props.reputation) }</p>
    </div>
  )
}

export default QuestionUserPreview;