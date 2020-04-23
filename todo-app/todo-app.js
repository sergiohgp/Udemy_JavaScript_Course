
// Challenge 
// Remove all p tags that have 'the' in the text

const ps = document.querySelectorAll('p')

console.log(ps)

// const getP = function (ps, query) {
//     return ps.filter(function (p) {
//         return p.textContent.toLowerCase().includes(query.toLowerCase())
//     })
// }

ps.forEach(function (p) {
    if (p.textContent.includes('the')) {
        p.remove()
    }
    console.log(p)
})