
//What are the assignment operators in JavaScript?
//Assignment operators are used to assign values to variables. There are several assignment operators in JavaScript:
//1. = (Assignment): Assigns the value of the right operand to the left operand.
//2. += (Addition Assignment): Adds the value of the right operand to the left operand and assigns the result to the left operand.
//3. -= (Subtraction Assignment): Subtracts the value of the right operand from the left operand and assigns the result to the left operand.
//4. *= (Multiplication Assignment): Multiplies the value of the right operand by the left operand and assigns the result to the left operand.
//5. /= (Division Assignment): Divides the value of the left operand by the right operand and assigns the result to the left operand.
//6. %= (Remainder Assignment): Divides the value of the left operand by the right operand and assigns the remainder to the left operand.
//7. **= (Exponentiation Assignment): Raises the value of the left operand to the power of the right operand and assigns the result to the left operand.
//8. <<= (Left Shift Assignment): Shifts the bits of the left operand to the left by the number of positions specified in the right operand and assigns the result to the left operand.
//9. >>= (Right Shift Assignment): Shifts the bits of the left operand to the right by the number of positions specified in the right operand and assigns the result to the left operand.
//10. >>>= (Unsigned Right Shift Assignment): Shifts the bits of the left operand to the right by the number of positions specified in the right operand and assigns the result to the left operand.
//11. &= (Bitwise AND Assignment): Performs a bitwise AND operation on the left and right operands and assigns the result to the left operand.
//12. |= (Bitwise OR Assignment): Performs a bitwise OR operation on the left and right operands and assigns the result to the left operand.
//13. ^= (Bitwise XOR Assignment): Performs a bitwise XOR operation on the left and right operands and assigns the result to the left operand.
 
//assignment operators

//Example :1
    let x = 5;
    console.log(x); // 5

//Example :2
    let y = 5;
    y += 3;
    console.log(y); // 8

//Example :3
    let z = 5;
    z -= 3;
    console.log(z); // 2

//Example :4
    let a = 5;
    a *= 3;
    console.log(a); // 15

//Example :5
    let b = 5;
    b /= 3;
    console.log(b); // 1.6666666666666667

//Example :6
    let c = 5;
    c %= 3;
    console.log(c); // 2

//Example :7
    let d = 5;
    d **= 3;
    console.log(d); // 125

//Example :8
    let e = 5;
    e <<= 1;
    console.log(e); // 10
    //explaination
    //5:  101
    //10: 1010

//Example :9
    let f = 5;
    f >>= 1;
    console.log(f); // 2
    //explaination
    //5:  101
    //2:  10

//Example :10
    let g = 5;
    g >>>= 1;
    console.log(g); // 2
    //explaination
    //5:  101
    //2:  10