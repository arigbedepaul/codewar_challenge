//jshint esversion:6
/*
Problem definition
take an integer n > 0
a digit between 0 - 9
square all numbers k ( between 0 - n )
*/
const nb_dig = (number, digit) => {
    let numberSquare = [];
    let counter = 0;
    if(digit >=0 && digit <= 9){
        digit = digit.toString();
    
        for(let k = 0; k <= number; k++){
            numberSquare.push(Math.pow(k, 2));
        }
        let allSquare = numberSquare.toString();
        for(let i = 0; i < allSquare.length; i++){
            if(allSquare.charAt(i) == digit){
                counter += 1;
            }
        }
        console.log("the number of " + digit + " in " + numberSquare + " is " +counter);
    }else{
        console.log("Enter a number between 0 - 9");
    }

};

nb_dig(11, 6);
nb_dig(20,0);
nb_dig(100, 5);
let userinput = parseInt(prompt("Enter any number greater than 0"));
let digitCount = parseInt(prompt("Enter the digit you which to count, your input should be between 0 -9 "));

nb_dig(userinput, digitCount);

