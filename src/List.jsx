import React from 'react'
import Group from './Group'

import data from '../data/groups.json'

const List = () => {
    return (
        <ul className="columns-3xs gap-x-6">
            {data.map((g) => (
                <Group key={g.title} group={g} />
            ))}
        </ul>
    )
}

export default List
