// DOM - Document Object Manipulation

const p = document.querySelector('p')

// p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '********'
    // p.remove()
})

console.log(p)

// Challenge DOM
