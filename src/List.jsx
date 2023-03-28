import React from 'react'
import { useQuery } from 'react-query'
import Group from './Group'

/* this points to the manually written data file hosted on github */
const url =
    'https://raw.githubusercontent.com/laszloekovacs/tailwind-checklist/master/data/data.json'

/* fetch the data.json from the repo directly */
/** @type {import('../global').getGroupList} */
const getGroupList = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

/* renders the list of class groups (the links on the sidebar of tailwind reference pages)
 * TODO: Maybe scrape it off from the site, but that would need to filter out some of the links
 * or generate from the tailwindcss source code
 */
const List = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: 'groupList',
        queryFn: getGroupList,
    })

    if (isLoading) return 'Imagine a spinning icon over here...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <ul className="columns-3xs">
            {data.groups.map((g) => (
                <Group key={g.title} group={g} />
            ))}
        </ul>
    )
}

export default List
