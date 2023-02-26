// 1. var let const
// break up with var
const numbers = [12, 33, 54, 66];
let salary = 344;
salary = 544;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bouns = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bouns;
    return total;
}

// 3. template string
const elementHtml = `
<div>
    <h3>Name: jimin</h3>
    <p>Adress: south korea </p>
    <p> Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`

// 4. Arrow function
const doubleIt = x => x * 2;
const calculateSalary = (salary, tax, bouns) => salary - salary * tax + bouns;

// 5. spread
const ages = [11, 33, 55, 99];
const newAge = [...ages, 66, 22, 77];

// 6. destructing
const{x, y, z, ...c} = {x: 1, y: 2, z: 5, name: 'neela', salary: 4000};
const[a, b, ...r] = [12, 55, 34, 76];