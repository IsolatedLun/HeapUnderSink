import React from "react"
import { ActionButtonProps, IconButtonProps } from "./types"



const IconButton = ({ children, props } : { props: IconButtonProps, children: any }) => {
    const { variant, onClick, rest, ariaLabel } = props;

    return (
    <button 
        className="[ button fa ]" 
        data-variant={variant ? variant : 'default'}
        aria-label={ariaLabel}
        aria-hidden
        onClick={(e) => onClick()}
        { ...rest }
        >
        { children }
    </button>
    )
}

export default IconButton