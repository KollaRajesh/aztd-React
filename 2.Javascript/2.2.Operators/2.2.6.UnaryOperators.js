//What are the unary operators in JavaScript?
//Unary operators are used to perform operations on a single operand. There are several unary operators in JavaScript:
//1. + (Unary Plus): Converts the operand to a number.
//2. - (Unary Minus): Negates the operand.
//3. ++ (Increment): Increases the value of the operand by 1.
//4. -- (Decrement): Decreases the value of the operand by 1.
//5. ! (Logical NOT): Inverts the value of the operand.
//6. typeof: Returns a string indicating the type of the operand.
//8. in: Returns true if a property is in an object.
//9. delete: Deletes a property from an object.
//10. instanceof: Returns true if an object is an instance of a constructor.


//unary operators
//Example :1
    console.log(+5); // 5

//Example :2
console.log(-5); // -5

//Example :3
let j = 5;
console.log(j++); // 5
console.log(j); // 6

//Example :4
let k = 5;
console.log(++k); // 6

//Example :5
let l = 5;
console.log(l--); // 5
console.log(l); // 4

//Example :6
let m = 5;
console.log(--m); // 4

//Example :7
console.log(!true); // false

//Example :8
console.log(!false); // true

//Example :9
console.log(typeof 5); // number

//Example :10
console.log(typeof 'hello'); // string

//Example :11

let person = { name: 'John', age: 30 };
console.log('name' in person); // true

//Example :12
let employee = { name: 'John', age: 30 };
delete employee.age;
console.log(employee); // { name: 'John' }

//Example :13
let n = 5;
console.log(n << 1); // 10
//explaination
//5:  101
//10: 1010

//Example :14
let o = 5;
console.log(o >> 1); // 2
//explaination
//5:  101
//2:  10

//Example :15
let p = 5;
console.log(p >>> 1); // 2
//explaination
//5:  101
//2:  10

//Example :16
//instanceof operator

let q = [];
console.log(q instanceof Array); // true

//Example :2
let r = {};
console.log(r instanceof Object); // true

//Example :3
let s = '';
console.log(s instanceof String); // false

