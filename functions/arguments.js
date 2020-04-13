let tip = function (total, tipPercent = 5) {
    console.log(`A ${tipPercent}% tip on a $${total} bill is $${total*tipPercent/100}.`)
    // return total*(1 + tipPercent/100)
}

let bill = tip(1, 10)
console.log(bill)

let name = 'Sergio'
console.log(`My name is ${name}`)