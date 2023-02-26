// for let add
let money = 24;
money = 44;
console.log(money);

// for const add
const bird = 'jaan pakhi';
const message = bird + 'potas potas';
console.log(message);

const numbers = [12, 89, 85, 45];
// last a add hobe
numbers.push(13);

// index 1 add hobe
numbers[1] = 90;
console.log(numbers);

//for object add
const student ={
    name: 'neela',
    address: 'dhaka'
}
student.name = 'neelu';
console.log(student)

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
    console.log(sum)
}

