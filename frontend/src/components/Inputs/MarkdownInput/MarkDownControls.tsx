import React from 'react'
import IconButton from '../../Modules/Buttons/IconButton'
import { INF_MarkDownInputContols } from './types'

const MarkDownControls = (props: INF_MarkDownInputContols) => {
  return (
    <ul className="[ markdown-controls ] [ input flex-items flex-wrap gap-025 ] 
        [ border-bottom-0 border-radius-0 fs-200 ]">
        <li>
            <IconButton 
                ariaLabel='Bold'
                onClick={() => props.setVal((prevVal: string) => prevVal + '**Insert bold text**')}>
                <strong className='[ fw-bold ]'>B</strong>
            </IconButton>
        </li>
        <li>
            <IconButton 
                ariaLabel='Italic'
                onClick={() => props.setVal((prevVal: string) => prevVal + '***Insert italic text***')}>
                <em>I</em>
            </IconButton>
        </li>
        <li>
            <IconButton 
                ariaLabel='Italic'
                onClick={() => props.setVal((prevVal: string) => prevVal + '`Insert code`')}>
                { '\uf121' }
            </IconButton>
        </li>
    </ul>
  )
}

export default MarkDownControls