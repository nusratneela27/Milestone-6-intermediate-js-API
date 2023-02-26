const numbers = [12, 4, 55, 13, 29, 19, 1, 15, 44, 55]

const fives = numbers.find(num => num % 5 === 0)
console.log(fives)

const products = [
    {id: 1, name: 'laptop', price: 26000 },
    {id: 1, name: 'mobile', price: 22000 },
    {id: 1, name: 'tablet', price: 21000 },
    {id: 1, name: 'watch', price:  2000 },
    {id: 1, name: 'computer', price: 30000 },
];

const cheap = products.find( product => product.price < 23000);
console.log(cheap)