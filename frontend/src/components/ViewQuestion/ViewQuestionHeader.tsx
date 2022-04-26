import { WARNING_ICON } from '../../consts'
import { humanizeNumber } from '../../utilFuncs/utils'
import IconTooltip from '../Modules/Tooltips/IconTooltip'
import Tooltip from '../Modules/Tooltips/Tooltip'
import { INF_Question } from '../Questions/types'

const ViewQuestionHeader = (question: INF_Question) => {
  return (
    <header className='[ question__header ] [ flow text-center bottom-border margin-bottom-1 ]'>
        <h1 className='[ text-center multi-ellipsis fw-normal ]'>{ question.title }</h1>
        <div className='[ flex-justify-center ]' data-flex-column-mobile>
            <div className="[ question__info ] [ flex flex-justify-center gap-05 margin-inline-auto ]" data-flex-column-mobile>
                <p><span className="[ text-muted ]">Created</span> { question.created_at }</p>
                <p><span className="[ text-muted ]">Modified</span> { question.modified_at }</p>
                <p><span className="[ text-muted ]">Viewed</span> { humanizeNumber(question.views) } times</p>
            </div>
            {
                question?.reports > 10 && (
                    <IconTooltip icon={WARNING_ICON} color='clr-error'>
                        <Tooltip>
                            <p className='[ width-8rem ]'>
                                This question has an unusual amount of reports!
                            </p>
                        </Tooltip>
                    </IconTooltip>
                )
            }
        </div>
    </header>
  )
}

export default ViewQuestionHeader