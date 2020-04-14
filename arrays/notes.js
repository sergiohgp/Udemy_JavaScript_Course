const notes = ['Note 1', 'Note 2', 'Note 3']

notes.push('New Note') // adds the new item to the end of the array
notes.pop() // removes the last item of the array and stores its value
notes.shift() // removes the very first element of the array and stores its value
notes.unshift('New New Note') // adds new element to the begining of the array

notes.splice(1, 1, 'New New New Note') // allows to remove elements at any index and add a new one. Parameter 1: index, Parameter 2: how many elements to be removed, Parameter 3: Element to be added

console.log(notes[notes.length -2])

console.log(notes)

let count = 0
notes.forEach(function (i) {
    count++
    console.log(notes[i])
})