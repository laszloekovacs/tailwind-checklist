import React from 'react'

const baseUrl = 'http://tailwindcss.com/docs/'

const Item = ({ link }) => {
    const [showPopup, setShowPopup] = React.useState(false)

    const handleMouseEnter = (link) => {
        //setShowPopup(true)
        console.log(link)
    }
    const handleMouseLeave = () => {
        //setShowPopup(false)
    }

    return (
        <li>
            <a className="hover:text-cyan-600" href={baseUrl + link}>
                {link}
            </a>
        </li>
    )
}

export default Item
