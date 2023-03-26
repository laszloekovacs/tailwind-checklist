import React from 'react'

const base = 'https://tailwindcss.com/docs/'

const Item = ({ group }) => {
    return (
        <>
            <li>
                <h2 className="font-bold mb-1 break-after-avoid">
                    {group.title}
                </h2>
            </li>

            {group.content.map((item) => (
                <li key={item}>
                    <a className="hover:text-teal-700" href={base + item}>
                        {item}
                    </a>
                </li>
            ))}
        </>
    )
}

export default Item
