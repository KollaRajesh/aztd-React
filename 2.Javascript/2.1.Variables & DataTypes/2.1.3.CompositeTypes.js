
// Composite data types are used to store multiple values in a single variable.

//1.object

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person); // Output: { name: "John", age: 30, city: "New York" }

//2.Array
// Array is a collection of elements of the same type or different types.
// Array elements are stored in contiguous memory locations.
// Array elements can be accessed using an index.
// Array elements can be added, removed, and modified.
// Array has a length property that returns the number of elements in the array.

//example of array
let numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Output: [1, 2, 3, 4, 5, 6]
numbers.pop(); // Output: [1, 2, 3, 4, 5]
numbers.shift(); // Output: [2, 3, 4, 5]
numbers.unshift(0); // Output: [0, 1, 2, 3, 4, 5]
numbers.splice(2, 1); // Output: [0, 1, 3, 4, 5]
numbers[2] = 10; // Output: [0, 1, 10, 4, 5]
console.log(numbers.length); // Output: 5
console.log(numbers);  // Output: [0, 1, 10, 4, 5]

// another example of array

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 3
fruits.push('mango'); // Output: ['apple', 'banana', 'orange', 'mango']
fruits.pop(); // Output: ['apple', 'banana', 'orange']
fruits.shift(); // Output: ['banana', 'orange']
fruits.unshift('kiwi'); // Output: ['kiwi', 'banana', 'orange']
fruits.splice(1, 1); // Output: ['kiwi', 'orange']  
fruits[1] = 'grapes'; // Output: ['kiwi', 'grapes']
console.log(fruits); // Output: ['kiwi', 'grapes']

//3.Map
    // Map is a collection of key-value pairs.
    // Map allows keys of any type.
    // Map maintains the insertion order of the keys.
    // Map has a size property that returns the number of key-value pairs.
    // Map has keys, values, and entries methods to iterate its elements.
    // Map has a clear method to remove all key-value pairs.
    // Map has a forEach method to iterate its elements.
    // Map has a way to check if a key exists in the map.   
    // Map has a way to delete a key from the map.

let map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.forEach((value, key) => { console.log(key, value); }); // Output: name John, age 30
console.log(map.get('name')); // Output: John
console.log(map); // Output: Map { 'name' => 'John', 'age' => 30 }

//4. Set
    // Set is a collection of unique values.
    // Set does not allow duplicate values.
    // Set does not have a size property.

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.forEach(value => { console.log(value); }); // Output: 1, 2
console.log(set.has(1)); // Output: true
console.log(set.has(4)); // Output: false
set.delete(3);
console.log(set); // Output: Set { 1, 2, 3 }


//5.WeakMap

    // WeakMap is similar to Map, but it only stores weakly held objects.
    // WeakMap does not prevent garbage collection of its keys.
    //Allows keys to be garbage collected when there are no other references to them.
    // WeakMap does not have size, keys, values, or entries methods.
    // WeakMap does not have a clear method.
    // WeakMap does not have a forEach method.
    // WeakMap does not have a way to iterate its elements.
    // WeakMap does not have a way to check if a key exists in the map.
    // WeakMap does not have a way to delete a key from the map.
    // WeakMap does not have a way to delete all keys from the map.

let weakMap = new WeakMap();
let key = { id: 1 };
weakMap.set(key, 'John');
console.log(weakMap); // Output: WeakMap { [items unknown] }

//6.WeakSet
    // WeakSet is similar to Set, but it only stores weakly held objects.
    // WeakSet does not prevent garbage collection of its elements.
    // Removes objects from the set once they become inaccessible by other means.
    // WeakSet does not have size, keys, values, or entries methods.
    // WeakSet does not have a clear method.
    // WeakSet does not have a forEach method.
    // WeakSet does not have a way to iterate its elements.
    // WeakSet does not have a way to check if an element exists in the set.
    // WeakSet does not have a way to delete an element from the set.
    // WeakSet does not have a way to delete all elements from the set.
    // WeakSet does not have a way to check the number of elements in the set.
    
let weakSet = new WeakSet();
let obj = { id: 1 };
weakSet.add(obj);   
console.log(weakSet); // Output: WeakSet { [items unknown] }

//7. Date
// Date is used to work with dates and times in JavaScript.
// Date represents a specific moment in time.
// Date can be created using new Date() constructor.
// Date has methods to get and set the year, month, day, hour, minute, second, and millisecond.
// Date has methods to get the day of the week, day of the month, month, and year.
// Date has methods to get the time in milliseconds since January 1, 1970.
// Date has methods to convert dates to strings and vice versa.
// Date has methods to compare dates.
// Date has methods to perform arithmetic operations on dates.

let date = new Date();
console.log(date); // Output: current date and time
date.setFullYear(2022);
date.setMonth(11);
date.setDate(25);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(500);
console.log(date); // Output: Sun Dec 25 2022 12:30:45 GMT+0530 (India Standard Time)

//8. RegExp
// RegExp is used for pattern matching with strings.
// RegExp represents a regular expression pattern.
// RegExp can be created using new RegExp() constructor.
// RegExp has methods to test if a string matches a pattern.
// RegExp has methods to search for a pattern in a string.
// RegExp has methods to replace a pattern in a string.
// RegExp has methods to extract parts of a string that match a pattern.
// RegExp has methods to split a string into an array of substrings based on a pattern.

let pattern = new RegExp('hello', 'i');
let str = 'Hello, World!';
console.log(pattern.test(str)); // Output: true
console.log(pattern.exec(str)); // Output: [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]
pattern = /hello/i;
console.log(pattern.test(str)); // Output: true
pattern = /Hello/g;
console.log(str.match(pattern)); // Output: [ 'Hello' ]

//9. Function
// Function is a block of code that performs a specific task.
// Function can take parameters and return a value.
// Function can be defined using function declaration, function expression, or arrow function.
// Function can be called using the function name followed by parentheses.
// Function can be passed as an argument to another function.
// Function can be returned from another function.

//example of function
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("John"); // Output: Hello, John!

//10. Class
    // Class is a blueprint for creating objects.
    // Class has properties and methods.
    // Class can be instantiated to create objects.
    // Class can have a constructor method to initialize object properties.
    // Class can have static methods that are called on the class itself.
    // Class can have getter and setter methods to get and set object properties.
    // Class can have computed properties that are calculated based on other properties.
    // Class can have inheritance to create a subclass of another class.
    // Class can have method overriding to change the behavior of inherited methods.
    // Class can have method overloading to define multiple methods with the same name but different parameters.
    // Class can have method chaining to call multiple methods in a single statement.
    // Class can have method binding to bind the context of a method to a specific object.
    // Class can have method currying to create a new function by partially applying arguments to an existing function.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello, " + this.name + "!");
    }
}
var  person = new Person("John", 30);
person.greet(); // Output: Hello, John!
 

//11. Symbol
// Symbol is a unique and immutable data type.
// Symbol is used as an identifier for object properties.
// Symbol is created using the Symbol() function.
// Symbol can have an optional description that is used for debugging.
// Symbol is used to create private object properties.
// Symbol is used to create unique object keys.

const id = Symbol('uniqueId');
console.log(id.description); // Output: uniqueId
console.log(id); // Output: Symbol(uniqueId)

