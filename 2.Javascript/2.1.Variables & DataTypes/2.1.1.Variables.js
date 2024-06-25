
// JavaScript Variables string, number, bigint, boolean, undefined, null, symbol
// JavaScript variables are containers for storing data values.
// In this example, we are creating variables of different data types.
// We are using the let keyword to declare variables.


//we can use let, var, const to declare variables
//let and const are block-scoped variables
//let is used to declare variables that are limited to the scope of a block statement, or expression on which it is used
//let is not hoisted to the top of the block and cannot be accessed before it is declared
//let can be reassigned but cannot be redeclared

//example of let
let greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!

//another complex example of let
let student = {
    name: "John",
    age: 30,
    course: "Computer Science"
};
console.log(student);  // Output: { name: "John", age: 30, course: "Computer Science" }

//const is used to declare variables that are limited to the scope of a block statement, or expression on which it is used
//const is not hoisted to the top of the block and cannot be accessed before it is declared
//const cannot be reassigned or redeclared


//example of const
const PI = 3.14;
console.log(PI); // Output: 3.14

//another complex example of const
const person = {
    name: "John",
    age: 30
};
console.log(person); // Output: { name: "John", age: 30 }



//var is function-scoped or global variables
//var is hoisted to the top of the block and can be accessed before it is declared
//var can be reassigned and redeclared

//example of var
var name = "John";
console.log(name); // Output: John

//another complex example of var
var employee = {
    name: "John",
    age: 30,
    department: "HR"
};
console.log(employee); // Output: { name: "John", age: 30, department: "HR" }








