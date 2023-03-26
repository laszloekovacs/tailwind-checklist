import React from 'react'

const base = 'https://tailwindcss.com/docs/'

const Group = ({ group }) => {
    return (
        <li className="mb-2">
            <h2 className="font-bold my-1">{group.title}</h2>
            <ul>
                {group.content.map((item) => (
                    <li key={item}>
                        <a href={base + item}>{item}</a>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default Group
