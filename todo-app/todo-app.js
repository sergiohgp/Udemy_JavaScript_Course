
const todos = [
    {
    text:'Shopping',
    completed: true
}, 
{
    text: 'Walk',
    completed: false
}, 
{
    text: 'Children pickup',
    completed: true
}, 
{
    text: 'Study',
    completed: true
},
{
    text: 'Meeting',
    completed: false
}]

// Challenge 1
// Remove all p tags that have 'the' in the text

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     }
//     console.log(p)
// })

// Challenge 2.
// Add a p tag -> You have x todos left
// Append all todos in p tags

const getTodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}
let counter = 0
todos.forEach(function (todo) {
    if (!todo.completed) {
        counter++
    }

})

const todoHeader = document.createElement('h3')
todoHeader.textContent = `You have ${counter} todos left.`


document.querySelector('body').appendChild(todoHeader)

todos.forEach(function (todo) {
    const addTodo = document.createElement('p')
    addTodo.textContent = todo.text
    document.querySelector('body').appendChild(addTodo)
})

// Listen to new todo creation
document.querySelector('#add-todo').addEventListener('click', function (event) {
    const p = document.createElement('p')
    p.textContent = 'ToDo created successfuly!'
    document.querySelector('body').appendChild(p)
})

// Listen for todo search
document.querySelector('#search-todo').addEventListener('input', function (event) {
    console.log(event.target.value)
})

// newElement.textContent
// newElement.appendChild