import React from 'react'
import { useQuery } from 'react-query'
import extractTable from './extractTable'
import { storeString, loadString } from './localstorage'

/*
    shows the table scraped from the website.
    it doesn"t start to load immediately, so not to spam the server.
    ReactQuery will cache the result.
    TODO: maybe even store it in local storage.
*/
const Table = ({ link }) => {
    const { error, data, isLoading } = useQuery(link, async () => {
        try {
            if (!link) throw new Error('no link')

            /* check local storage */
            let text = loadString(link)
            if (text) return text

            /* load from server */

            const res = await fetch(link)

            if (!res.ok) throw new Error('no response')

            text = await res.text()

            /* remove junk */
            const data = extractTable(text)

            /* store in local storage */
            storeString(link, data)

            return data
        } catch (e) {
            console.log(e)
        }

        return data
    })

    if (isLoading) return <p>loading...</p>

    return <div>{data}</div>
}

export default Table
