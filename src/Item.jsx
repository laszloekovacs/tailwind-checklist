import React from 'react'
import Tooltip from './Tooltip'

const baseUrl = 'https://tailwindcss.com/docs/'

/*
renders individual links. decides whether to show the tooltip or not.
*/

const Item = ({ link }) => {
    const [showTip, setShowTip] = React.useState(false)
    const itemRef = React.useRef(null)

    return (
        <li
            ref={itemRef}
            className={showTip ? 'relative' : ''}
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
        >
            <a className="hover:text-cyan-600" href={baseUrl + link}>
                {link}
            </a>

            {showTip && <Tooltip link={baseUrl + link} parentRef={itemRef} />}
        </li>
    )
}

export default Item
