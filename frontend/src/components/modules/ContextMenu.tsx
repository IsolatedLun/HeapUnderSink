import React, { useRef } from 'react'

const ContextMenu = ({ children, listItems } : { children: any, listItems: any }) => {
    const contextRef = React.createRef<HTMLUListElement>();

    return (
    <button
        onClick={() => (contextRef.current as HTMLElement).focus()} 
        className="[ context-menu-container ]"
        data-context-menu-state='off'
        >
        { children }
        <ul 
            ref={contextRef}
            className="[ context-menu ] [ list ]">
            { listItems }
        </ul>
    </button>
    )
}

export default ContextMenu