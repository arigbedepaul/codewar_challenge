//jshint esversion: 6
function fibonacciTail(number, base){
    let factorial = 1;
    for(let i= 1; i <= number; i++){
        factorial = factorial * i;
    }
    
    console.log(factorial);
    let factorialToString = factorial.toString(base);
    console.log(factorialToString);
    let counter = 0;
    for(let i = factorialToString.length - 1; i >= 0; i--){
        if(factorialToString.charAt(i) === "0"){
            counter++;
        }else{
            break;
        }
    }
    return counter;
}

let number = 41;
let numberOfZero = fibonacciTail(number, 35);

console.log("The number of zero in "+ number + "! is "+numberOfZero + " zeroes");