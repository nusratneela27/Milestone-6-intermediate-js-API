const numbers = [12, 4, 55, 13, 29, 19, 1, 15, 44, 55]

const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums)
const tiny = numbers.filter(n => n <10);
// console.log(tiny)
const even = numbers.filter(num => num % 2 === 0);
// console.log(even)


const products = [
    {id: 1, name: 'laptop', price: 26000 },
    {id: 1, name: 'mobile', price: 22000 },
    {id: 1, name: 'tablet', price: 20000 },
    {id: 1, name: 'watch', price:  2000 },
    {id: 1, name: 'computer', price: 30000 },
];

// const expensive = products.filter(product => product.price > 20000);
// const expensive = products.filter(product => product.price > 200);
const expensive = products.filter(product => product.price < 200);
console.log(expensive)