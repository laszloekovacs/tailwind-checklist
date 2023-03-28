import React from 'react'

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
    const xpos = isParentOnLeft ? '-left-32 bg-red-200' : 'left-16 bg-blue-200'
    const ypos = isParentOnTop
        ? '-top-32 text-green-900'
        : 'top-6 text-orange-900'

    const styling = `absolute z-2 ${xpos} ${ypos} w-32 h-32 p-2`

    return <div className={styling}>{link}</div>
}

export default Tooltip
