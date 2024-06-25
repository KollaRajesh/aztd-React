
//What are the ternary operators in JavaScript?
//The ternary operator is a conditional operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, and a colon (:), followed by an expression to execute if the condition is false.
//The syntax of the ternary operator is as follows:
//condition ? expression1 : expression2
//If the condition is true, expression1 is executed; otherwise, expression2 is executed.
//The ternary operator is a shorthand way of writing an if-else statement.

//ternary operators

//Example :1
let q = 5;
let result = q > 3 ? 'greater' : 'smaller';
console.log(result); // greater

//Example :2
let r = 5;
let result1 = r < 3 ? 'smaller' : 'greater';
console.log(result1); // greater

//Example :3
let s = 5;
let result2 = s === 5 ? 'equal' : 'not equal';
console.log(result2); // equal

//Example :4
let t = 5;
let result3 = t !== 5 ? 'not equal' : 'equal';
console.log(result3); // equal

//Example :5
let u = 5;
let result4 = u >= 5 ? 'greater or equal' : 'smaller';
console.log(result4); // greater or equal

//Example :6
let v = 5;
let result5 = v <= 3 ? 'smaller or equal' : 'greater';
console.log(result5); // greater

//Example :7
let w = 5;
let result6 = w < 3 ? 'smaller' : w > 3 ? 'greater' : 'equal';
console.log(result6); // greater

//Example :8
let x = 5;
let result7 = x === 5 ? 'equal' : x > 5 ? 'greater' : 'smaller';
console.log(result7); // equal

//Example :9

let y = 5;
let result8 = y !== 5 ? 'not equal' : y < 5 ? 'smaller' : 'greater';
console.log(result8); // greater

//Example :10
let z = 5;
let result9 = z >= 5 ? 'greater or equal' : z < 5 ? 'smaller' : 'equal';
console.log(result9); // greater or equal

//Example :11
let a1 = 5;
let result10 = a1 <= 3 ? 'smaller or equal' : a1 > 3 ? 'greater' : 'equal';
console.log(result10); // greater

//Example :12
let b1 = 5;
let result11 = b1 < 3 ? 'smaller' : b1 > 3 ? 'greater' : 'equal';
console.log(result11); // greater

//Example :13
let c1 = 5;
let result12 = c1 === 5 ? 'equal' : c1 > 5 ? 'greater' : 'smaller';
console.log(result12); // equal

//Example :14
let d1 = 5;
let result13 = d1 !== 5 ? 'not equal' : d1 < 5 ? 'smaller' : 'greater';
console.log(result13); // greater

//Example :15
let e1 = 5;
let result14 = e1 >= 5 ? 'greater or equal' : e1 < 5 ? 'smaller' : 'equal';
console.log(result14); // greater or equal
//Example :16
let f1 = 5;
let result15 = f1 <= 3 ? 'smaller or equal' : f1 > 3 ? 'greater' : 'equal';
console.log(result15); // greater


//Example :18

    let h1 = 5;
    let result17 = h1 === 5 ? 'equal' : h1 > 5 ? 'greater' : 'smaller or equal';
    console.log(result17); // greater or equal

//Example :19
let i1 = 5;
let result18 = i1 !== 5 ? 'not equal' : i1 < 5 ? 'smaller' : 'greater or equal';
console.log(result18); // greater or equal

//Example :20
let j1 = 5;
let result19 = j1 >= 5 ? 'greater or equal' : j1 < 5 ? 'smaller' : 'equal';
console.log(result19); // greater or equal
