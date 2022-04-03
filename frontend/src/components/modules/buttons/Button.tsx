import React from "react"
import { ActionButtonProps } from "./types"



const Button = ({ children, props } : { props: ActionButtonProps, children: any }) => {
    const { variant, onClick, rest } = props;

    return (
    <button 
        className="[ button ]" 
        data-variant={variant ? variant : 'default'}
        onClick={(e) => onClick()}
        { ...rest }
        >
        { children }
    </button>
    )
}

export default Button