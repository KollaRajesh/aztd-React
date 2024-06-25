## **Primitive Types**:
   
 **String**: Represents text and is written with quotes (single or double).

   Example for string:

 ```javascript
    let greeting = "Hello, world!";
 ```
**Number**: Stores decimal numbers (floating point) and can be written with or without decimals. 

Example for number:

```javascript
    let age = 25;
```

**Bigint**: Used for large integers.

Example for bigint:

```javascript
   let bigNumber = 123456789012345678901234567890n;
```

**Boolean**: Represents true or false values.

Example for boolean:

```javascript
let isTrue = true;
let isFalse = false;
```

**Undefined**: Indicates a variable that has been declared but not assigned a value.

Example for undefined:

```javascript
let name;
console.log(name); // Output: undefined
```

**Null**: Represents the intentional absence of any value.

Example for null:

```javascript
let data = null;
console.log(data); // Output: null
```
In the example above, we have a variable called data that is assigned the value of null. 
This indicates that the variable intentionally does not have any value.When we log the value of data to the console, it will output null.


**Symbol**: Introduced in ES6, used for unique identifiers.

Example for symbol:

```javascript
const id = Symbol('uniqueId');
console.log(id); // Output: Symbol(uniqueId)
```

## **Composite (Reference) Types**:

**Object**: Can contain both built-in objects (like arrays, dates, maps) and user-defined objects.

Example for object:

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person); // Output: { name: "John", age: 30, city: "New York" }
```

**Array**: A collection of values, indexed by integers.

Example for array:

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```
Another example for Arrays:

```javascript
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']
```
Arrays are a collection of values, indexed by integers. In the example above, we have an array called `fruits` that contains three elements: 'apple', 'banana', and 'orange'. We can access individual elements of the array using their index. For example, `fruits[0]` would give us 'apple'. Arrays in JavaScript are mutable, meaning we can add, remove, or modify elements in the array.


**Function**: A type of object that can be invoked.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!

```

Example for function using function expression

```javascript
const multiply = function(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // Output: 6

```
Example for function using arrow function notation:

```javascript
const add = (a, b) => {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
```

In the example above, we have a function called `add` that takes two parameters `a` and `b`. It uses arrow function notation (`=>`) to define the function. Inside the function body, we use the `return` keyword to return the sum of `a` and `b`. We can invoke the function by calling `add(2, 3)`, which will output `5`. Arrow functions are a concise way to define functions in JavaScript, especially when the function body is a single expression.



**Set and Map**: Used for storing unique values and key-value pairs, respectively. 

```javascript
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet); // Output: Set {1, 2, 3}

let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

console.log(myMap); // Output: Map {'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'}
```

**Symbol**: Introduced in ES6, used for unique identifiers.

Example for symbol:

```javascript
const id = Symbol('uniqueId');
console.log(id); // Output: Symbol(uniqueId)
```

## `var`:    

**Scope**: var declarations are globally scoped or function scoped.
         When declared outside a function, they are available throughout the entire window.
         When declared within a function, they are accessible only within that function.

**Hoisting**: var variables are hoisted to the top of their scope and initialized with a value of undefined.

**Re-declaration and Updates**: You can re-declare and update var variables within their scope.

**let**:

**Scope**: let variables are block scoped (limited to the block they are declared in).
    **Hoisting**: Like var, let variables are hoisted but not initialized.
    **Re-declaration and Updates**: You can update let variables, but you cannot re-declare them within the same scope.

**const**:
    **Scope**: const variables are also block scoped.
    Hoisting: Similar to let, const variables are hoisted but not initialized.
    Re-declaration and Updates: You cannot re-declare or update const variables after their initial assignment. They remain constant.


> We can't  achieve polymophism using functions expression in java script 

## Polymorphism using inheritance :

    In JavaScript, we can achieve polymorphism using function syntax. Polymorphism refers to the ability of an object to take on many forms or have multiple behaviors.

    To implement polymorphism using function syntax, we can define multiple functions with the same name but different parameter lists. Each function can perform a different behavior based on the type or number of arguments passed to it.

    Here's an example:

    ```javascript
    function calculateArea(shape) {
        if (shape instanceof Circle) {
            // Calculate area of a circle
            return Math.PI * shape.radius * shape.radius;
        } else if (shape instanceof Rectangle) {
            // Calculate area of a rectangle
            return shape.width * shape.height;
        } else if (shape instanceof Triangle) {
            // Calculate area of a triangle
            return (shape.base * shape.height) / 2;
        } else {
            // Handle unknown shape
            throw new Error("Unknown shape");
        }
    }

    // Define different shape classes
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
    }

    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }

    class Triangle {
        constructor(base, height) {
            this.base = base;
            this.height = height;
        }
    }

    // Create instances of different shapes
    const circle = new Circle(5);
    const rectangle = new Rectangle(4, 6);
    const triangle = new Triangle(3, 8);

    // Calculate areas using the same function
    console.log(calculateArea(circle)); // Output: 78.53981633974483
    console.log(calculateArea(rectangle)); // Output: 24
    console.log(calculateArea(triangle)); // Output: 12
    ```

In the example above, we define a function called `calculateArea` that takes a `shape` parameter. Inside the function, we use `instanceof` operator to determine the type of the `shape` object and perform the corresponding area calculation. If the `shape` object is of an unknown type, we throw an error.

We also define three shape classes: `Circle`, `Rectangle`, and `Triangle`. Each class has its own set of properties and methods. We create instances of these classes and pass them to the `calculateArea` function to calculate their respective areas.

By using function syntax and checking the type of the object passed as an argument, we achieve polymorphism in JavaScript.
