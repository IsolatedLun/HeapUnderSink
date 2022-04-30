import React from 'react'
import { SubmitButtonProps } from './types'

const SubmitButton = (props: SubmitButtonProps) => {
    const { variant, rest, isDead } = props;

    return (
    <button 
        className='[ button ]' 
        type='submit' data-dead={isDead}
        data-variant={variant ? variant : 'action'} 
        { ...rest }>
        { props.children }
    </button>
    )
}

export default SubmitButton