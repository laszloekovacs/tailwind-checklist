import fs from 'fs'
import { parse } from 'node-html-parser'

async function main() {
    /* base path + content is the full link to the page */
    const basepath = 'https://tailwindcss.com/docs/'

    /* the final assembled, cleaned json data */
    let tooltipsArray = []

    try {
        /* load links from ./data/groups.json */
        const file = fs.readFileSync('./data/groups.json', { encoding: 'utf8' })
        const datajson = JSON.parse(file)

        /* for testing trim the data not to overload servers */
        //datajson.groups = datajson.groups.slice(0, 1)
        //datajson.groups[0].content = datajson.groups[0].content.slice(0, 1)

        let tooltips = {}

        for (let group of datajson.groups) {
            console.log('starting group: ' + group.title)

            /* 
            content is an array of url sections 
            */
            for (let item of group.content) {
                /* fetch raw from tailwind site */
                const url = basepath + item
                console.log('fetching ' + url)
                const raw = await fetch(url)

                if (!raw.ok) {
                    throw new Error(
                        `Failed to fetch url: ${url} status: ${raw.status}`
                    )
                }

                const html = await raw.text()

                /* parse html */
                console.log('parsing ' + url)
                const rootElement = parse(html)

                /* extract the first table */
                const tableBody = rootElement.querySelector('tbody')

                let rowsArr = []

                for (let i = 0; i < tableBody.childNodes.length; i++) {
                    const tw = tableBody.childNodes[i].childNodes[0].text
                    const css = tableBody.childNodes[i].childNodes[1].text
                    rowsArr = [...rowsArr, [tw, css]]
                }

                console.log('extracted ' + rowsArr.length + ' rows')

                /* add rows and the name and the url to the final tooltip dataset */
                tooltips[url] = rowsArr
            }
        }

        /* dump the final dataset to the console then write it into a file */

        fs.writeFileSync(
            './data/tooltips.json',
            JSON.stringify(tooltips, null, 4)
        )
    } catch (e) {
        console.error(e)
    }
}

main().then(() => console.log('finished'))
