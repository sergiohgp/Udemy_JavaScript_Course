
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
},{
    text: 'Work Meeting',
    completed: true
}]

const filters = {
    searchText: ''
}


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

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#incomplete-todos').innerHTML = ''
    
    const todoHeader = document.createElement('h3')
    todoHeader.textContent = `You have ${incompleteTodos.length} todos left.`
    document.querySelector('#incomplete-todos').appendChild(todoHeader)

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)


// First way to add elements
const getTodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}
// let counter = 0
// todos.forEach(function (todo) {
//     if (!todo.completed) {
//         counter++
//     }

// })



todos.forEach(function (todo) {
    const addTodo = document.createElement('p')
    addTodo.textContent = todo.text
    // document.querySelector('body').appendChild(addTodo)
})

// Listen to new todo creation
document.querySelector('#add-todo').addEventListener('click', function (event) {
    const p = document.createElement('p')
    p.textContent = 'ToDo created successfuly!'
    document.querySelector('body').appendChild(p)
})

// Listen for todo search
document.querySelector('#search-todo').addEventListener('input', function (event) {
    filters.searchText = event.target.value
    renderTodos(todos, filters)
})

// newElement.textContent
// newElement.appendChild