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
            className="relative"
            ref={itemRef}
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => setShowTip(false)}
        >
            {showTip && <Tooltip link={baseUrl + link} parentRef={itemRef} />}

            <a
                className="light:hover:text-cyan-600 dark:hover:text-cyan-200"
                href={baseUrl + link}
            >
                {link}
            </a>
        </li>
    )
}

export default Item
