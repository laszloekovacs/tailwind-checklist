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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>tailwind class</th>
                        <th>css</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
