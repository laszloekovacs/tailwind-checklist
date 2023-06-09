import React from 'react'
import Item from './Item'

/* renders a "chapter".
 */
const Group = ({ group }) => {
    return (
        <li className="mb-4 max-w-max px-2">
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
