//What are the comparison operators in JavaScript?
//Comparison operators are used to compare two values and return a boolean result. There are eight comparison operators in JavaScript:
//1. == (Equal): Returns true if the operands are equal.
//2. === (Strict Equal): Returns true if the operands are equal and of the same type.
//3. != (Not Equal): Returns true if the operands are not equal.
//4. !== (Strict Not Equal): Returns true if the operands are not equal and/or not of the same type.
//5. > (Greater Than): Returns true if the left operand is greater than the right operand.
//6. < (Less Than): Returns true if the left operand is less than the right operand.
//7. >= (Greater Than or Equal): Returns true if the left operand is greater than or equal to the right operand.
//8. <= (Less Than or Equal): Returns true if the left operand is less than or equal to the right operand.

//comparison operators

//Example :1
    console.log(5 == 5); // true
    console.log(5 == '5'); // true
    console.log(5 === 5); // true   
    console.log(5 === '5'); // false

//Example :2
    console.log(5 != 3); // true
    console.log(5 != '5'); // false
    console.log(5 !== 3); // true       
    console.log(5 !== '5'); // true

//Example :3
    console.log(5 > 3); // true
    console.log(5 < 3); // false
    console.log(5 >= 5); // true
    console.log(5 <= 3); // false
