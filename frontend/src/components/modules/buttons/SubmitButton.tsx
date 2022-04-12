import React from 'react'
import { ButtonProps } from './types'

const SubmitButton = (props: ButtonProps) => {
    const { variant, rest } = props;

    return (
    <button 
        className='[ button ]' type='submit'
        data-variant={variant ? variant : 'action'} { ...rest }>
        { props.children }
    </button>
    )
}

export default SubmitButton