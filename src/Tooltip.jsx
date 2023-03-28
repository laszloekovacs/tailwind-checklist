import React from 'react'
import Table from './Table'

/*
    the tooltip container only cares about his own positioning.
    gets the ref from the parent, and calculates its own position.
    passes the link to the tooltip child.
*/

const Tooltip = ({ link, parentRef }) => {
    /* parent's dimensions and position relative to screen */
    const parentRect = parentRef.current.getBoundingClientRect()

    /* find where the parent is relative to the screens center */
    const isParentOnLeft = parentRect.left > window.innerWidth / 2
    const isParentOnTop = parentRect.bottom > window.innerHeight / 2

    /* if the parent is on the left side */
    const xpos = isParentOnLeft ? '-left-44' : 'left-16'
    const ypos = isParentOnTop ? '-bottom-0' : '-top-0'

    const styling = `bg-blue-300 overflow-hidden absolute z-2 w-44 max-h-lg p-2 border-2 border-black rounded ${xpos} ${ypos}`

    return (
        <div className={styling}>
            <div id="tooltipContent">{link}</div>
        </div>
    )
}

export default Tooltip
