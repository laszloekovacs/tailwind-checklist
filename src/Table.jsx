import React from 'react'

/*
    shows the table scraped from the website.
    it doesn"t start to load immediately, so not to spam the server.
    ReactQuery will cache the result.
    TODO: maybe even store it in local storage.
*/
const Table = ({ link }) => {
    const [error, data] = useQuery(link, async () => {
        /*  */
    })

    return <div>{link}</div>
}

export default Table
