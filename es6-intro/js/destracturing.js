const fish = {
    name: 'king Hilsha',
    address: 'chandur',
    color: 'silver',
    phone: '01600000',
    price: '4000' 
}

const phone = fish.phone;
const color = fish.color;
const price = fish.price;
console.log(phone);

const{address} = fish;
console.log(address)

const {age, name} = {name:'jimin', age: 26, profession: 'singer'}
console.log(age)

// array destracturing
const [first, another] = [44, 45, 66, 77];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['alim', 'halim']
}

const [baba, chacha] = getNames();
console.log(chacha, baba)