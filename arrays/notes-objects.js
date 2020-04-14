const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to ski'
}, {
    title: 'My next meeting',
    body: 'I would like to review subjects'
}, {
    title: 'My next lunch',
    body: 'I would like eat pasta'
}]

console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function (note) {
    console.log(note)
    return note.title === 'My next trip'
})

console.log(index)