import React from 'react'
import Tooltip from './Tooltip'
import Item from './Item'

const base = 'https://tailwindcss.com/docs/'

/* renders a "chapter".
 */
const Group = ({ group }) => {
    return (
        <li className="mb-4">
            <h2 className="font-bold mb-1 break-after-avoid text-gray-400 text-lg">
                {group.title}
            </h2>

            <ul>
                {group.content.map((link) => (
                    <Item key={link} link={link} />
                ))}
            </ul>
        </li>
    )
}

export default Group
