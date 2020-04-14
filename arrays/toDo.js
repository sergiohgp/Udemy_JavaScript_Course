// Create an array with five todos
const todo = ['Shopping', 'walk', 'children pickup', 'study', 'meeting']

console.log(`Yoy have ${todo.length} things to do in your list: `)
const todoList = function () {
    for (i = 0; i < todo.length; i++) {
        console.log(`To do ${i + 1}: ${todo[i]}`)
    }
}

todoList()