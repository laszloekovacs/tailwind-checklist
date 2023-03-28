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
    const isParentOnLeft = parentRect.left >= window.innerWidth / 2
    const isParentOnTop = parentRect.bottom >= window.innerHeight / 2

    /* decide positioning of the window */
    const xpos = isParentOnLeft ? '-left-[12rem] md:-left-[24rem]' : 'left-16'
    const ypos = isParentOnTop ? '-bottom-0' : '-top-0'

    const styling = `overscroll-contain bg-red-100 md:bg-blue-300 overflow-auto opacity-100 absolute z-20 w-[12rem] md:w-[24rem] max-h-[30vh] p-2 border-2 border-black rounded ${xpos} ${ypos}`

    return (
        <div className={styling}>
            <Table link={link} />
        </div>
    )
}

export default Tooltip
