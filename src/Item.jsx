import React from 'react'

const base = 'https://tailwindcss.com/docs/'

/* renders a "chapter", meaning either a link or a header.
it renders into a flat list, meaning headers and links are on the same level
enclosed in <li> tags.
hovering on a link will show a popup with the table of classes from the tailwind
reference page.
*/
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
