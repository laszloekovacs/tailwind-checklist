import React from 'react'
import Table from './Table'

/*
    the tooltip container only cares about his own positioning.
    gets the ref from the parent, and calculates its own position relative to that.
    passes the link to the tooltip child.
*/

const Tooltip = ({ link, parentRef }) => {
    /* get parents dimensions */
    const parentRect = parentRef.current.getBoundingClientRect()

    /* find where the parent is relative to the screens center */
    const isParentOnLeft = parentRect.left > window.innerWidth / 2
    const isParentOnTop = parentRect.bottom > window.innerHeight / 2

    /* decide positioning of the window */
    const xpos = isParentOnLeft ? '-left-44' : 'left-16'
    const ypos = isParentOnTop ? '-bottom-0' : '-top-0'

    const styling = `bg-blue-300 overflow-scroll absolute z-2 w-44 h-32 p-2 border-2 border-black rounded ${xpos} ${ypos}`

    return (
        <div className={styling}>
            <Table link={link} />
        </div>
    )
}

export default Tooltip
