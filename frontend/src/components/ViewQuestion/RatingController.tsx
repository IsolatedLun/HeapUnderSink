import { CARET_DOWN_ICON, CARET_UP_ICON } from '../../consts';
import { decorateStat } from '../Questions/Stat';
import IconButton from '../Modules/Buttons/IconButton';
import { humanizeNumber } from '../../utilFuncs/utils';
import { INF_RatingController } from './types';

const RatingController = (props: INF_RatingController) => {
  return (
    <div className='[ flex-col gap-05 text-center ]'>
        <IconButton ariaLabel={`Upvote ${props.modelType}`} onClick={() => null}>
            { CARET_UP_ICON }
        </IconButton>
        <p className='[ stat ]' data-stat-variant={decorateStat(props.model.votes, 'votes')}>
            { humanizeNumber(props.model.votes) }
        </p>
        <IconButton ariaLabel={`Downvote ${props.modelType}`} onClick={() => null}>
            { CARET_DOWN_ICON }
        </IconButton>
    </div>
  )
}

export default RatingController