
//destructuring array in ES6 and destructuring object in ES6
//Destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.

//Array destructuring
    //Example 1
        [a, b] = ['Hello', 'Max'];
        console.log(a); // Hello
        console.log(b); // Max

//Example 2
    let arr = ['apple', 'banana', 'cherry'];
    let [fruit1, fruit2, fruit3] = arr;
    console.log(fruit1); // Output: apple
    console.log(fruit2); // Output: banana
    console.log(fruit3); // Output: cherry


//Object destructuring
//Example 1
    let personobj = { personName: 'Max', personage: 28 };
    let { personName, personage } = personobj;
    console.log(personName); // Max
    console.log(personage); // 28

//Example 2
    let obj = {name1: 'John', age1: 30, city: 'New York'};
    let { name1, age1, city } = obj;

console.log(name1); // Output: John
console.log(age1); // Output: 30
console.log(city); // Output: New York


//example of nested object destructuring
let user={
    profile:{
        name:"john",
        email:"john@gmail.com"
    },
    social :{
        facebook:"john124@gmail.com",
        twitter:"Mark12@gmail.com"

    }
}
let { profile, social } = user;
console.log(profile);

let  {facebook, twitter}=social;
console.log(facebook);
console.log(twitter);


//Template literals
    const name = 'Max';
    const age = 29;
    console.log(`My name is ${name} and I am ${age} years old.`);
    //My name is Max and I am 29 years old.

    //Arrow functions
    function printMyName(name) {
        console.log(name);
    }
    printMyName('Max');

