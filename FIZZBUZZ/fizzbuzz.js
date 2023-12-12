//Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
//If i is a multiple of both 3 and 5, print FizzBuzz.
//If i is a multiple of 3 (but not 5), print Fizz.
//If i is a multiple of 5 (but not 3), print Buzz.
//If i is not a multiple of 3 or 5, print the value of i.

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return num;
    }
}

console.log(fizzBuzz(15));