let greetUser = function () {
    console.log('Welcome User');
}

greetUser();

let square = function (number) {  
    let result = number * number;  
    console.log(result);
}

square(3);

// challenge

// Function convert fahrenheit to celsius

let fahrenheitToCelsius = function (tempF) {
    let tempC = (tempF-32)*5/9;
    return tempC;
}

console.log(fahrenheitToCelsius(450))