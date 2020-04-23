// DOM - Document Object Manipulation

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

const p = document.querySelector('p')

// p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '********'
    // p.remove()
})

console.log(p)

// Create element
const newParagraph = document.createElement('p')

newParagraph.textContent = 'New Paragraph'
document.querySelector('body').appendChild(newParagraph)
