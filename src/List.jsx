import React from 'react'
import { useQuery } from 'react-query'
import Item from './Item'

const url =
    'https://raw.githubusercontent.com/laszloekovacs/tailwind-checklist/master/data/data.json'

const getList = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const List = () => {
    const { isLoading, error, data } = useQuery('groupList', getList)

    if (isLoading) return 'Imagine a spinning icon over here...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <ul className="columns-3xs">
            {data.groups.map((g) => (
                <Item key={g.title} group={g} />
            ))}
        </ul>
    )
}

export default List
