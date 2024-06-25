
// Example for function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!

// Example for function using function expression
const multiply = function(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // Output: 6

// Example for function using arrow function
const add = (a, b) => {
    return a + b;
}
console.log(add(2, 3)); // Output: 5


// Example for function using arrow function with implicit return
const subtract = (a, b) => a - b;
console.log(subtract(5, 3)); // Output: 2

// Example for function using arrow function with single argument
const square = x => x * x;
console.log(square(5)); // Output: 25

// Example for function using arrow function with no arguments
const greet = () => console.log("Hello!");
greet(); // Output: Hello!

// Example for function using arrow function with multiple lines
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
console.log(divide(10, 2)); // Output: 5

// Example for function using arrow function with rest parameter
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Example for function using arrow function with default parameter
const greet = (name = "Java script") => {
    console.log("Hello, " + name + "!");
}
greet(); // Output: Hello, Java script!

// Example for function using arrow function with object literal
const person = (name, age) => ({ name: name, age: age });
console.log(person("John", 30)); // Output: { name: 'John', age: 30 }

// Example for function using arrow function with destructuring
const student = ({ name, age }) => {
    console.log(name + " is " + age + " years old.");
}
student({ name: "Alice", age: 20 }); // Output: Alice is 20 years old.

// Example for function using arrow function with lexical this
// In the following example, the value of this inside the arrow function is the same as the value of this outside the function.
// The value of this keyword in an arrow function is inherited from the enclosing scope.
// In the following example, the value of this inside the arrow function is the same as the value of this outside the function.
function Person() {
    this.age = 0;

    setInterval(function() {
        this.age++; // this refers to the global object
        console.log(this.age);
    }, 1000);
}

Person(); // Output: NaN, NaN, NaN, ...
// In the above example, the value of this inside the setInterval function is the global object, not the Person object.
// To fix this issue, we can use an arrow function, which inherits the value of this from the enclosing scope.
// The arrow function preserves the value of this from the Person object, so the age property is incremented correctly.


// Example for function using arrow function with this keyword
// The value of this keyword in an arrow function is inherited from the enclosing scope.
// In the following example, the value of this inside the arrow function is the same as the value of this outside the function.
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // this refers to the Person object
        console.log(this.age);
    }, 1000);
}
Person(); // Output: 1, 2, 3, ...

// ES 2015 class syntax
class Person {
    constructor() {
        this.age = 0;

        setInterval(() => {
            this.age++; // this refers to the Person object
            console.log(this.age);
        }, 1000);
    }
}
new Person(); // Output: 1, 2, 3, ...

