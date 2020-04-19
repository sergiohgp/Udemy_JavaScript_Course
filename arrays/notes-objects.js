const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to ski'
}, {
    title: 'My next meeting',
    body: 'I would like to review subjects'
}, {
    title: 'My next lunch',
    body: 'I would like to eat pasta'
}]


const findNote = function (notes, noteTitle) {
    return note = notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'My next lunch')
console.log(note)