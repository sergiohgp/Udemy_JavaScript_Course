
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
    searchText: '',
    hideCompleted: false
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
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed
    // })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#incomplete-todos').innerHTML = ''
    
    const todoHeader = document.createElement('h3')
    todoHeader.textContent = `You have ${incompleteTodos.length} todos left.`
    document.querySelector('#incomplete-todos').appendChild(todoHeader)

    filteredTodos.forEach(function (todo) {
        // if (filters.hideCompleted){
        //     if (!todo.completed) {
                // const todoEl = document.createElement('div')
                // todoEl.textContent = todo.text
                // document.querySelector('#todos').appendChild(todoEl)
            // }
        // } else {
            const todoEl = document.createElement('div')
            todoEl.textContent = todo.text
            document.querySelector('#todos').appendChild(todoEl)
        // }
    })
}

renderTodos(todos, filters)


// First way to add elements
const getTodo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

// Listen to new todo creation
// document.querySelector('#add-todo').addEventListener('click', function (event) {
//     const p = document.createElement('p')
//     p.textContent = 'ToDo created successfuly!'
//     document.querySelector('body').appendChild(p)
// })

// Listen for todo search
document.querySelector('#search-todo').addEventListener('input', function (event) {
    filters.searchText = event.target.value
    renderTodos(todos, filters)
})

// newElement.textContent
// newElement.appendChild

// Challenge Form
document.querySelector('#todo-form').addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(event.target.elements.todoTitle.value)
    todos.push({
        text: event.target.elements.todoTitle.value,
        completed: false
    })
    renderTodos(todos, filters)
    event.target.elements.todoTitle.value = ''
})

todos.forEach(function (todo) {
    const addTodo = document.createElement('p')
    addTodo.textContent = todo.text
    // document.querySelector('body').appendChild(addTodo)
})

document.querySelector('#hideCompleted').addEventListener('change', function (e) {
        filters.hideCompleted = e.target.checked
        renderTodos(todos, filters)
    console.log(e.target.checked)
})