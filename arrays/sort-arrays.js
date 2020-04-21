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


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)