
// spread operator and rest operator
//spread operator is used to split up array elements or object properties
//rest operator is used to merge a list of function arguments into an array

//spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
};

console.log(newPerson);

//rest operator
//rest operator is used to merge a list of function arguments into an array
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));
console.log(filter(1, 2, 3, 4));

