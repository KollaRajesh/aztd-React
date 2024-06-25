/*--------------------------------------logical operators --------------------------------------*/
//What are the logical operators in JavaScript?
//Logical operators are used to combine or manipulate boolean values. There are three logical operators in JavaScript:
//1. && (Logical AND): Returns true if both operands are true.
//2. || (Logical OR): Returns true if one of the operands is true.
//3. ! (Logical NOT): Returns true if the operand is false and vice versa.

/*--------------------------------------bitwise operators--------------------------------------*/
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

/*--------------------------------------comparison operators--------------------------------------*/
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

/*--------------------------------------assignment operators--------------------------------------*/
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
 

/*--------------------------------------arithmetic operators--------------------------------------*/
//What are the arithmetic operators in JavaScript?
//Arithmetic operators are used to perform mathematical operations on numbers. There are several arithmetic operators in JavaScript:
//1. + (Addition): Adds two operands.
//2. - (Subtraction): Subtracts the right operand from the left operand.
//3. * (Multiplication): Multiplies two operands.
//4. / (Division): Divides the left operand by the right operand.
//5. % (Modulus): Returns the remainder of the division of the left operand by the right operand.
//6. ++ (Increment): Increases the value of the operand by 1.
//7. -- (Decrement): Decreases the value of the operand by 1.
//8. ** (Exponentiation): Raises the left operand to the power of the right operand.


/*--------------------------------------unary operators--------------------------------------*/
//What are the unary operators in JavaScript?
//Unary operators are used to perform operations on a single operand. There are several unary operators in JavaScript:
//1. + (Unary Plus): Converts the operand to a number.
//2. - (Unary Minus): Negates the operand.
//3. ++ (Increment): Increases the value of the operand by 1.
//4. -- (Decrement): Decreases the value of the operand by 1.
//5. ! (Logical NOT): Inverts the value of the operand.
//6. in: Returns true if a property is in an object.
//7. delete: Deletes a property from an object.
//8. typeof: Returns a string indicating the type of the operand.
//9. instanceof: Returns true if an object is an instance of a constructor.

    //What are the typeof and instanceof operators in JavaScript?
    //The typeof operator is used to determine the type of a value or variable in JavaScript. It returns a string indicating the type of the operand.
    //The syntax of the typeof operator is as follows:
    //typeof operand

    //The instanceof operator is used to determine whether an object is an instance of a particular class or constructor function. It returns true if the object is an instance of the specified class; otherwise, it returns false.
    //The syntax of the instanceof operator is as follows:
    //object instanceof constructor

    //What are the in and delete operators in JavaScript?
    //The in operator is used to determine whether an object has a property with a specific key. It returns true if the property exists; otherwise, it returns false.
    //The syntax of the in operator is as follows:
    //key in object

/*--------------------------------------ternary operators--------------------------------------*/
//What are the ternary operators in JavaScript?
//The ternary operator is a conditional operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, and a colon (:), followed by an expression to execute if the condition is false.
//The syntax of the ternary operator is as follows:
//condition ? expression1 : expression2
//If the condition is true, expression1 is executed; otherwise, expression2 is executed.
//The ternary operator is a shorthand way of writing an if-else statement.


/*--------------------------------------bitwise shift operator--------------------------------------*/
//What are the bitwise shift operators in JavaScript?
//The bitwise shift operators are used to shift the bits of a number to the left or right. There are three bitwise shift operators in JavaScript:
//1. << (Left Shift): Shifts the bits of a number to the left by a specified number of positions. Zeros are used to fill the empty positions.
//2. >> (Sign-propagating Right Shift): Shifts the bits of a number to the right by a specified number of positions. The sign bit is used to fill the empty positions.
//3. >>> (Zero-fill Right Shift): Shifts the bits of a number to the right by a specified number of positions. Zeros are used to fill the empty positions.

//Additional keywords in JavaScript:

    //1. void: Evaluates an expression and returns undefined.
    //2. new: Creates an instance of a user-defined object.
    //3. super: Calls the parent class constructor.
    //4. this: Refers to the current object.
    //5. yield: Pauses and resumes a generator function.
    //6. async: Declares an asynchronous function.
    //7. await: Pauses and resumes an asynchronous function.
    //8. ... (Spread/Rest): Expands an iterable object into individual elements or combines individual elements into an array.
    //9. ?: (Conditional): Returns one of two values based on a condition.
    //10. , (Comma): Evaluates two expressions and returns the result of the second expression.
    //11. => (Arrow): Defines a function expression.
    //12. function: Declares a function.
    //13. class: Declares a class.
    //14. yield*: Delegates to another generator function.
    //15. yield: Pauses and resumes a generator function.









