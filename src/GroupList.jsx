import React from 'react'
import { useQuery } from 'react-query'
import Group from './Group'

const url =
    'https://raw.githubusercontent.com/laszloekovacs/tailwind-checklist/master/data/data.json'

const getList = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const GroupList = () => {
    const { isLoading, error, data } = useQuery('groupList', getList)

    if (isLoading) return 'Imagine a spinning icon over here...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <ul>
                {data.groups.map((g) => (
                    <Group key={g.title} group={g} />
                ))}
            </ul>
        </div>
    )
}

export default GroupList
