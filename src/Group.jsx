import React from 'react'

const base = 'https://tailwindcss.com/docs/'

const Group = ({ group }) => {
    return (
        <div>
            <h2>{group.title}</h2>
            <ul>
                {group.content.map((item) => (
                    <li key={item}>
                        <a href={base + item}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Group
