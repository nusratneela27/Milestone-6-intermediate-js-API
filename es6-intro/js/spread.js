const max = Math.max(12, 56, 999, 45);
const numbers = [12, 85, 999, 43];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
// console.log(numbers);
// console.log(numbers2)

// ------------------

const numbers3 = [...numbers];

// --------eivabe likhbo-----------
const numbers4 = [444, 78, ...numbers, 111, 33];
console.log(numbers4);