import React from 'react'

import tooltips from '../data/tooltips.json'

/*
    shows the table scraped from the website.
*/
const Table = ({ link }) => {
    if (!tooltips.hasOwnProperty(link)) return <div>no data</div>

    const tableRows = tooltips[link]

    if (!tableRows) {
        return <div>no data</div>
    }

    return (
        <table className="text-sm table-auto w-full break-keep">
            <thead>
                <tr>
                    <th>tailwind class</th>
                    <th>css</th>
                </tr>
            </thead>
            <tbody>
                {tableRows.map((row, index) => {
                    return (
                        <tr
                            key={index}
                            className="odd:bg-opacity-25 bg-black bg-opacity-0"
                        >
                            <td className="whitespace-nowrap pr-3">{row[0]}</td>
                            <td>{row[1]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
