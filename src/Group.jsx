import React from 'react'

const base = 'https://tailwindcss.com/docs/'

const Group = ({ group }) => {
    return (
        <>
            <li>
                <h2 className="font-bold mt-4 mb-1 break-after-avoid">
                    {group.title}
                </h2>
            </li>

            {group.content.map((item) => (
                <li key={item}>
                    <a href={base + item}>{item}</a>
                </li>
            ))}
        </>
    )
}

export default Group
