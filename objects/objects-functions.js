let myBook = {
    title: '1984',
    author: 'Geaorge Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} by ${book.author} has ${book.pageCount} pages.`
    }
    console.log(`${book.title} by ${book.author} has ${book.pageCount} pages.`)
}

console.log(getSummary(myBook).summary)
getSummary(myBook)
getSummary(otherBook)

// Chalenge

let convertTemperature = function (temperatureC) {
    return {
        temperatureF: (temperatureC*9/5)+32,
        temperatureK: temperatureC - 300
    }
}

console.log(convertTemperature(50).temperatureF)