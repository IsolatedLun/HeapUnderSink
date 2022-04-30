import React from "react"
import { ActionButtonProps } from "./types"



const Button = (props: ActionButtonProps) => {
    const { variant, onClick, rest } = props;

    return (
    <button 
        className="[ button ]" 
        data-variant={variant ? variant : 'default'}
        type='button'
        onClick={(e) => onClick()}
        { ...rest }
        >
        { props.children }
    </button>
    )
}

export default Button