import React from 'react'
import { ButtonProps } from './types'

const SubmitButton = ({ children, props } : { children: any, props: ButtonProps }) => {
    const { variant, rest } = props;

    return (
    <button 
        className='[ button ]' type='submit'
        data-variant={variant ? variant : 'action'} { ...rest }>
        { children }
    </button>
    )
}

export default SubmitButton