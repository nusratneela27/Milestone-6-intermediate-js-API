const add = (first, second) => first + second;
const getFullName = (first, second) => first + ' ' + second;
const multiply = (a, b) => a * b;
const addAll = (a, b, c, d) => a + b + c + d;

// no parameter
const getPie = () => 3.1416;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function 
// if you want to return somthing, use the function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
} 

const result = multiply(2,3);
// console.log(result)

