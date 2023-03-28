/* get the table out of the html page. 
   the table should be on the top first.
   parse the page, extract the class and css into a pair and put it into an array
   return the stringified array
*/

const extractTable = (text) => {
    /* regex the table in text form otherwise parsing will load images and whatnot */
    const regex = /<table.*?>([\s\S]*?)<\/table>/g

    const tableString = text.match(regex)

    /* try to parse into valid html */
    const parser = new DOMParser()
    const doc = parser.parseFromString(tableString, 'text/html')

    const tbody = doc.querySelector('tbody')

    console.log(tbody)

    let tableData = []

    for (let i = 0; i < tbody.rows.length; i++) {
        tableData.push([
            tbody.rows[i].cells[0].innerText,
            tbody.rows[i].cells[1].innerText,
        ])
    }

    const data = JSON.stringify(tableData)
    return data
}

export default extractTable
