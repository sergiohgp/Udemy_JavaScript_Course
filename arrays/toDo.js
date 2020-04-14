// Create an array with five todos
const todo = ['Shopping', 'walk', 'children pickup', 'study', 'meeting']

todo.splice(2, 1)
todo[todo.length] = 'New todo'
todo.shift()

console.log(`Yoy have ${todo.length} things to do in your list: `)


const todoList = function () {
    for (let i = 0; i < todo.length; i++) {
        console.log(`To do ${i + 1}: ${todo[i]}`)
    }
}

todo.forEach(function (i) {
    console.log(i)
})

todoList()