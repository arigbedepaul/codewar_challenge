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
    digit = digit.toString();
    for(let k = 0; k <= number; k++){
        numberSquare.push(Math.pow(k, 2));
    }
    console.log(numberSquare);
    let allSquare = numberSquare.toString();
    for(let i = 0; i < allSquare.length; i++){
        if(allSquare.charAt(i) == digit){
            counter += 1;
        }
    }
    console.log("the number of " + digit + " in " + numberSquare + " is " +counter);
};

let counter = nb_dig(11, 6);

