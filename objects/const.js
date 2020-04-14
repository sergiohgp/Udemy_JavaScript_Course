const fahrenheitToCelsius = function (tempF) {
    const tempC = (tempF-32)*5/9;
    return tempC;
}

console.log(fahrenheitToCelsius(450))

const person = {
    age:28
}

person.age = 29

console.log(person)