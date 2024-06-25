//What are the bitwise operators in JavaScript?
//Bitwise operators are used to manipulate numbers at the bit level. They perform their operations on binary representations but return standard JavaScript numerical values.
//There are seven bitwise operators in JavaScript:
//1. & (Bitwise AND): Returns a one in each bit position for which the corresponding bits of both operands are ones.
//2. | (Bitwise OR): Returns a one in each bit position for which the corresponding bits of either or both operands are ones.
//3. ^ (Bitwise XOR): Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.
//4. ~ (Bitwise NOT): Inverts the bits of its operand.
//5. << (Left Shift): Shifts the bits of the first operand to the left by the number of positions specified in the second operand.
//6. >> (Sign-propagating Right Shift): Shifts the bits of the first operand to the right by the number of positions specified in the second operand. The sign bit is used to fill the trailing positions.
//7. >>> (Zero-fill Right Shift): Shifts the bits of the first operand to the right by the number of positions specified in the second operand. Zeroes are used to fill the trailing positions.


//bitwise operators
//Example :1
console.log(5 & 3); // 1
//explaination
//5: 101
//3: 011
//   ----
//1: 001

//Example :2
console.log(5 | 3); // 7
//explaination
//5: 101
//3: 011
//   ----
//7: 111

//Example :3
console.log(5 ^ 3); // 6
//explaination
//5: 101
//3: 011
//   ----
//6: 110

//Example :4
console.log(~5); // -6
//explaination
//5:  00000000000000000000000000000101
//~5: 11111111111111111111111111111010
//    -6

//Example :5
console.log(5 << 1); // 10
//explaination
//5:  101
//10: 1010


//Example :6
console.log(5 >> 1); // 2
//explaination
//5:  101

//Example :7

console.log(5 >>> 1); // 2
//explaination
//5:  101
//2:  010
//    010