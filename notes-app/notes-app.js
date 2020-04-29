// DOM - Document Object Manipulation

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to ski'
}, {
    title: 'My next meeting',
    body: 'I would like to review subjects'
}, {
    title: 'My next lunch',
    body: 'I would like to eat pasta'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
    event.target.textContent = 'Clicked'
})

// document.querySelector('#delete-note').addEventListener('click', function (event) {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

document.querySelector('#input').addEventListener('input', function (event) {
    filters.searchText = event.target.value
    renderNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', function (event) {
//     event.preventDefault()
//     console.log(event.target.elements.firstName.value)
//     event.target.elements.firstName.value = ''
// })

// Class 1
// const p = document.querySelector('p')

// // p.remove()

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '********'
//     // p.remove()
// })

// console.log(p)

// // Create element
// const newParagraph = document.createElement('p')

// newParagraph.textContent = 'New Paragraph'
// document.querySelector('body').appendChild(newParagraph)

document.querySelector('#showNotes').addEventListener('change', function (e) {
    console.log(e.target.checked)
})
