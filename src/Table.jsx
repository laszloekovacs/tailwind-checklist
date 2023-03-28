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
            return 'done loading for now'
        } catch (e) {
            console.log(e)
        }
    })

    if (isLoading) return <p>loading...</p>

    return <div>{data}</div>
}

export default Table
