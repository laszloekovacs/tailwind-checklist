import React from 'react'
import { useQuery } from 'react-query'
import { Group } from './Group'

const url = 'http://data.json'

/* load /data/data.json  */
const getList = async () => {
    const response = await fetch(url)
    return response.json()
}

const GroupList = () => {
    const { isLoading, error, data } = useQuery('groupList', getList)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <ul>
                {data.map((group) => (
                    <Group key={group.title} group={group} />
                ))}
            </ul>
        </div>
    )
}

export default GroupList
