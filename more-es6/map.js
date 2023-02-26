const numbers = [2, 4, 6, 8];

// --------------------------
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
// console.log(output)
// -----------------------------


// ------------------------------
function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleItOld(number);
        output.push(doubled);
    }
    return output;
}
// const result = getDoubled(numbers);
// console.log(result)
// ----------------------------------------



// -------------------------------------------
function doubleItOld(num){
    return num * 2;
}



// ------------------------------------------
const doubleIt = num => num * 2;
const result2 = getDoubled(numbers);
// console.log(result2)
// ---------------------------------------

const makeDoubled = numbers.map(doubleIt);
// console.log(makeDoubled)


// --------------------------------------
const makeDoubledDirect = numbers.map(num => num * 2);
// console.log(makeDoubledDirect)
// ---------------------------------------



// --------------------------------------
const makeDoubled2 = numbers.map(x => x * 2);
// console.log(makeDoubled2)
// ---------------------------------------


// ----------------------------------------
const fiveTimes = [1,2,3,4,5].map(x => x*5);
console.log(fiveTimes);
// ---------------------------------------