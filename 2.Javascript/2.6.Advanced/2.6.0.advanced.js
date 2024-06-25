// javascript advanced concepts
// 1. Async/Await
// 2. Memoization
// 3. Callbacks
// 4. Promises
// 5. Closures
// 6. Currying
// 7. Generators
// 8. Iterators
// 9. Proxies
// 10. Reflect
// 15. Symbols
// 11. Maps
// 12. Sets
// 13. WeakMaps
// 14. WeakSets
// 15. Classes
// 16. Inheritance
// 17. Encapsulation
// 18. Polymorphism
// 19. Abstraction
// 20. Data Structures


//1. Async/Await

    // Async/Await is a new way to write asynchronous code in JavaScript.
    // Async/Await is a combination of the async function and the await keyword.
    // Async/Await makes asynchronous code look and behave like synchronous code.
    // Async/Await is built on top of Promises.
    // Async/Await is supported in all modern browsers.
    // Async/Await is supported in Node.js 7.6 and later.

    //example of async/await
        async function fetchData() {
            let response = await fetch('https://api.github.com/users');
            let data = await response.json();
            console.log(data);
        }
        fetchData();

    //another example of async/await with post request
        async function postData() {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            let data = await response.json();
            console.log(data);
        }
            
        postData();

//2. Memoization
    // Memoization is an optimization technique used to speed up programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
    // Memoization is used to optimize recursive functions that have overlapping subproblems.
    // Memoization is used to optimize functions that have expensive computations.

    //example of memoization
        function memoize(fn) {
            let cache = {};
            return function(...args) {
                let n = args[0];
                if (n in cache) {
                    console.log('Fetching from cache', n);
                    return cache[n];
                } else {
                    console.log('Calculating result', n);
                    let result = fn(n);
                    cache[n] = result;
                    return result;
                }
            }
        }
        memoize(10); //

//3. Callbacks
    // Callbacks are functions that are passed as arguments to other functions.
    // Callbacks are used to handle asynchronous operations in JavaScript.
    // Callbacks are used to handle events in JavaScript.
    // Callbacks are used to handle user input in JavaScript.
    // Callbacks are used to handle data from APIs in JavaScript.

    //example of callbacks
        function greet(name, callback) {
            console.log('Hello ' + name);
            callback();
        }
        function callMe() { 
            console.log('I am callback function');
        }
        greet('John', callMe);

//4. Promises
// Promises are used to handle asynchronous operations in JavaScript.
// Promises are used to avoid callback hell in JavaScript.
// Promises are used to handle multiple asynchronous operations in JavaScript.
// Promises are used to handle errors in asynchronous operations in JavaScript.
// Promises are used to handle data from APIs in JavaScript.

//example of promises with fetch api
    let promise = new Promise((resolve, reject) => {
        let isSuccessful = true;
        if (isSuccessful) {
            resolve('Success!');
        } else {
            reject('Failure!');
        }
    });
    promise.then((message) => {
        console.log('Promise resolved successfully:', message);
    }).catch((message) => {
        console.log('Promise rejected:', message);
    });

    //another example of promises with fetch api
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error:', error));


//5. Closures
    // Closures are a fundamental concept in JavaScript.
    // closures are functions that have access to the outer function's variables.
    // closures are functions that have access to the outer function's scope.
    // closures are functions that have access to the outer function's parameters.
    // closures are functions that have access to the outer function's variables even after the outer function has finished executing.

    //example of closures
        function outerFunction() {
            let outerVariable = 'I am outside!';
            function innerFunction() {
                console.log(outerVariable);
            }
            return innerFunction;
        }
        let innerFunc = outerFunction();
        innerFunc(); // Output: I am outside!
    
//6. Currying
    // Currying is a technique used to convert a function that takes multiple arguments into a sequence of functions that each take a single argument.
    // Currying is used to create reusable functions.
    //Currying is used to create higher - order functions.

    //example of currying
        function multiply(a) {
            return function(b) {
                return function(c) {
                    return a * b * c;
                }
            }
        }
        let result = multiply(2)(3)(4);
        console.log(result)//. Output: 24

//7. Generators
    // Generators are a new type of function in JavaScript.
    // Generators are used to create iterators in JavaScript.
    // Generators are used to generate a sequence of values.
    // Generators are used to pause and resume the execution of a function.
    // Generators are defined using the function* syntax.

    //example of generators
        function* generatorFunction() {
            yield 'a';
            yield 'b';
            yield 'c';
        }
        
        let generator = generatorFunction();
        console.log(generator.next().value); // Output: a
        console.log(generator.next().value); // Output: b
        console.log(generator.next().value); // Output: c
        console.log(generator.next().value); // Output: undefined
        
//8. Iterators
    // Iterators are objects that have a next() method.
    // Iterators are used to loop over a sequence of values.
    // Iterators are used to generate a sequence of values.
    // Iterators are used to pause and resume the execution of a function.

    //example of iterators
        let arr = [1, 2, 3];
        let iterator = arr[Symbol.iterator]();
        console.log(iterator.next().value); // Output: 1
        console.log(iterator.next().value); // Output: 2
        console.log(iterator.next().value); // Output: 3
        console.log(iterator.next().value); // Output: undefined

//9. Proxies

    // Proxies are used to define custom behavior for fundamental operations.
    // Proxies are used to intercept and customize operations on objects.
    // Proxies are used to create virtual objects.
    // Proxies are used to create traps for objects.
    // Proxies are used to create handlers for objects.

    //example of proxies

        let target = {
            message1: "hello",
            message2: "everyone"
        };

        let handler = {
            get: function(target, prop, receiver) {
                return target[prop] + " world!";
            }
        };  
        let proxy = new Proxy(target, handler);
        console.log(proxy.message1); // Output: hello world!
        console.log(proxy.message2); // Output: everyone world!

//10. Reflect
    // Reflect is a built-in object in JavaScript.
    // Reflect is used to access and manipulate objects.
    // Reflect is used to define custom behavior for fundamental operations.

    //example of reflect
        let obj = { x: 1, y: 2 };

        console.log(Reflect.get(obj, 'x')); // Output: 1
        console.log(Reflect.get(obj, 'y')); // Output: 2


//11. Symbols
    // Symbols are a new primitive data type in JavaScript.
    // Symbols are used to create unique identifiers for objects.
    // Symbols are used to create private object properties.
    // Symbols are used to create object properties that are not enumerable.

    //example of symbols
        let symbol = Symbol('key');
        console.log(typeof symbol); // Output: symbol
        console.log(symbol.toString()); // Output: Symbol(key)
        console.log(Symbol('key') === Symbol('key')); //    Output: false


//9. Maps
    // Maps are a new data structure in JavaScript.
    // Maps are used to store key-value pairs.
    // Maps are used to store data in a structured way.
    // Maps are used to store data in a predictable way.

    //example of maps
        var map = new Map();
        map.set('name', 'John');
        map.set('age', 30);
        console.log(map.get('name')); // Output: John
        console.log(map.get('age')); // Output: 30

    //another example of maps using for each loop
        map = new Map();
        map.set('name', 'John');
        map.set('age', 30);
        map.forEach((value, key) => {
            console.log(key + ' = ' + value);
        }); // Output: name = John, age = 30

//10. Sets
    // Sets are a new data structure in JavaScript.
    // Sets are used to store unique values of any type.
    // Sets are used to store data in a structured way.
    // Sets are used to store data in a predictable way.

    //example of sets
        let set = new Set();
        set.add(1);
        set.add(2);

        console.log(set.has(1)); // Output: true
        console.log(set.has(3)); // Output: false
        set.delete(1);
        console.log(set.has(1)); // Output: false


//11. WeakMaps
    // WeakMaps are a new data structure in JavaScript.
    // WeakMaps are used to store key-value pairs.
    // WeakMaps are used to store private object properties.
    // WeakMaps are used to store object properties that are not enumerable.
    // WeakMaps are used to store data in a predictable way.

//example of weakmaps
    let weakMap = new WeakMap();
    let key = {};
    weakMap.set(key, 'value');
    console.log(weakMap.get(key)); // Output: value

//12. WeakSets
    // WeakSets are a new data structure in JavaScript.

    // WeakSets are used to store unique values of any type.
    // WeakSets are used to store data in a structured way.
    // WeakSets are used to store data in a predictable way.
    // WeakSets are used to store private object properties.


//example of weaksets
    let weakSet = new WeakSet();
    let key = {};
    weakSet.add(key);
    console.log(weakSet.has(key)); // Output: true
    weakSet.delete(key);

//13. Classes
    // Classes are a new way to define objects in JavaScript.
    // Classes are used to create objects.
    // Classes are used to create instances of objects.
    // Classes are used to create properties and methods.
    // Classes are used to create static methods.
    // Classes are used to create getter and setter methods.
    // Classes are used to create computed properties.

    //example of classes

        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            greet() {
                console.log('Hello, ' + this.name + '!');
            }
        }

        let person = new Person('John', 30);
        person.greet(); // Output: Hello, John!

    //another example of classes with constructor method and getter and setter methods
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            get getName() {
                return this.name;
            }
            set setName(newName) {
                this.name = newName;
            }
        }

        let person = new Person('John', 30);
        console.log(person.getName); // Output: John
        person.setName = 'Alice';
        console.log(person.getName); // Output: Alice


//14. Inheritance
    // Inheritance is a way to create a new class from an existing class.
    // Inheritance is used to create a subclass of another class.
    // Inheritance is used to create a parent-child relationship between classes.
    // Inheritance is used to create a base class and a derived class.

    //example of inheritance
        class Animal {
            constructor(name) {
                this.name = name;
            }
            speak() {
                console.log(this.name + ' makes a noise.');
            }
        }

        class Dog extends
            Animal {
            speak() {
                console.log(this.name + ' barks.');
            }
        }

        let dog = new Dog('Rover');
        dog.speak(); // Output: Rover barks.

//15. Encapsulation
    // Encapsulation is a way to restrict access to an object's properties and methods.
    // Encapsulation is used to hide the internal state of an object.
    // Encapsulation is used to protect an object's properties and methods from being modified by external code.

    //example of encapsulation
    class Person {
        constructor() {
            let name = 'John';
            this.getName = function() {
                return name;
            };
            this.setName = function(newName) {
                name = newName;
            };
        }
    }

    let person = new Person();
    console.log(person.getName()); // Output: John

//16. Polymorphism
    // Polymorphism is a way to create a single interface for different data types.
    // Polymorphism is used to create a parent class with multiple child classes.
    // Polymorphism is used to create a base class and a derived class.
    // Polymorphism is used to create a single method that can be used with different types of objects.

        //example of polymorphism
        class Animal {
            speak() {
                console.log('Animal makes a noise.');
            }
        }

        class Dog extends
            Animal {
            speak() {
                console.log('Dog barks.');
            }
        }

        class Cat extends
            Animal {
            speak() {
                console.log('Cat meows.');
            }
        }

        let dog = new Dog();
        let cat = new Cat();
        dog.speak(); // Output: Dog barks.
        cat.speak(); // Output: Cat meows.

//17. Abstraction
    // Abstraction is a way to hide the internal details of an object and show only the necessary details.
    // Abstraction is used to create a simple interface for complex objects.
    // Abstraction is used to create a parent class with multiple child classes.
    // Abstraction is used to create a base class and a derived class.

    //example of abstraction

    class Animal {
        speak() {
            throw new Error('Method must be implemented in the derived class.');
        }
    }


    class Dog extends
        Animal {
        speak() {
            console.log('Dog barks.');
        }
    }

    class Cat extends
        Animal {
        speak() {
            console.log('Cat meows.');
        }
    }

    let dog = new Dog();
    let cat = new Cat();
    dog.speak(); // Output: Dog barks.
    cat.speak(); // Output: Cat meows.

//18. Data Structures
    // Data structures are used to store and organize data in a computer.
    // Data structures are used to manage data efficiently.`
    // Data structures are used to perform operations on data.
    // Data structures are used to create algorithms to solve problems.

    //example of data structures
        class Stack {
            constructor() {
                this.items = [];
            }
            push(element) {
                this.items.push(element);
            }
            pop() {
                if (this.items.length === 0) {
                    return 'Underflow';
                }
                return this.items.pop();
            }
            peek() {
                return this.items[this.items.length - 1];
            }
            isEmpty() {
                return this.items.length === 0;
            }
        }

        let stack = new Stack();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        console.log(stack.pop()); // Output: 30
        console.log(stack.peek()); // Output: 20
        console.log(stack.isEmpty()); // Output: false

