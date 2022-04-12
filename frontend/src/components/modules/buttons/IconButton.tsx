import React from "react"
import { ActionButtonProps, IconButtonProps } from "./types"



const IconButton = (props: IconButtonProps) => {
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
        { props.children }
    </button>
    )
}

export default IconButton