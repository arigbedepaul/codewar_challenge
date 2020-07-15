//jshint esversion: 6
const divisbleByTwoNumbers = (number, x, y) => {
    if(number > 0 && x > 0 && y > 0){
        if(number % x == 0 && number % y == 0){
            console.log("true because " + number + " is divisible by " + x + " and " + y);
        }else{
            console.log("false");
        }
    }
};

divisbleByTwoNumbers(10, 2, 5);

