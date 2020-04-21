// Create an array with five todos
const todo = [
    {
    text:'Shopping',
    completed: true
}, 
{
    text: 'walk',
    completed: false
}, 
{
    text: 'children pickup',
    completed: true
}, 
{
    text: 'study',
    completed: true
},
{
    text: 'meeting',
    completed: false
}]

// todo.splice(2, 1)
// todo[todo.length] = 'New todo'
// todo.shift()

// console.log(`Yoy have ${todo.length} things to do in your list: `)


// const todoList = function () {
//     for (let i = 0; i < todo.length; i++) {
//         console.log(`To do ${i + 1}: ${todo[i]}`)
//     }
// }

// todo.forEach(function (i) {
//     console.log(i)
// })

// todoList()

// Chalenge notes-object
// 1. Covert todo array in an array of objects -> text, completed (true or false)
// 2. create function to remove the todo by text value

const deleteTodo = function(todos, text) {
    const index = todos.findIndex(function(todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    if (index > -1){
        todos.splice(index, 1, `item removed`)
    }
}

// Chalenge 2.
// Function to get not completed todos
const getThingsToDo = function (todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })  
}

// console.log(getThingsToDo(todo))

// console.log(todo)
// deleteTodo(todo, 'study')
// console.log(todo)

// Challenge 3.
// 1. Sort todo
// 2. Sort todo with completed as criteria

const sortTodo = function (todo) {
    todo.sort(function (a, b) {
        if (a.text.toLowerCase() < b.text.toLowerCase()){
            return -1
        }else if (b.text.toLowerCase() < a.text.toLowerCase()){
            return 1
        }else {
            return 0
        }
    })
}

sortTodo(todo)
console.log(todo)

const sortTodoCompleted = function (todo) {
    todo.sort(function (a, b) {
        if (a.completed < b.completed) {
            // sortTodo(todo)
            return -1
        }else if (b.completed < a.completed) {
            return 1
        }else {
            return 0
        }
    })
}

sortTodoCompleted(todo)
console.log(todo)
