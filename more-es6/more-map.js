const numbers = [2, 55, 34, 67];
const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half)
// console.log(thirds)

const friends = ['jin', 'j-hope', 'jimin', 'jungkook'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);

const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths)

const products = [
    {id: 1, name: 'laptop', price: 26000 },
    {id: 1, name: 'mobile', price: 22000 },
    {id: 1, name: 'tablet', price: 20000 },
    {id: 1, name: 'watch', price:  2000 },
    {id: 1, name: 'computer', price: 30000 },
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(items)
console.log(prices)
