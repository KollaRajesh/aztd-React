
//Class
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

//Prototype:

//JavaScript is a prototype-based language, which means it uses prototypes to inherit properties and methods from one object to another.
//In JavaScript, objects can be linked to other objects, forming a prototype chain.
//When a property or method is accessed on an object,
    //the JavaScript engine first checks if that property or method exists on the object itself.
    //If it does not, it will check the object’s prototype, and so on, until it reaches the end of the prototype chain1.

//Prototype - based inheritance is more memory efficient as it allows instances to share properties and methods.
//The extensibility of prototypes offers more flexibility for dynamic modifications at runtime.

//Class:

//Starting from ES6 (ECMAScript 2015), JavaScript introduced the class keyword,
//which provides a more traditional class-based way of creating objects and their methods.
//Classes in JavaScript are essentially syntactic sugar over the prototype-based system.

//In other words, the class keyword provides a more familiar and clean syntax for creating objects and their methods,
//       but under the hood, it still uses prototypes to link objects and inherit properties and methods.
//Class-based syntax creates separate copies for each instance.
//Classes are less mutable once defined.

//1. example of class with constructor method
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
    

//another example of class  with constructor method

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person = new Person("John", 30);
console.log(person.name); // Output: John

//2. another example of class with inheritance and method overriding
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

//3. another example of class with method overloading

class Calculator {
    add(a, b) {
        return a + b;
    }
    add(a, b, c) {
        return a + b + c;
    }
}
let calculator = new Calculator();
console.log(calculator.add(2, 3)); // Output: runtime NaN
console.log(calculator.add(2, 3, 4)); // Output: 9

//4.another example of class with method chaining

class Car {
    constructor() {
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
        return this;
    }
    brake() {
        this.speed -= 10;
        return this;
    }
}
let car = new Car();
car.accelerate().accelerate().brake();

//5.another example of class with method binding

class Counter {
    constructor() {
        this.count = 0;
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.count++;
        console.log(this.count);
    }
}

let counter = new Counter();
let increment = counter.increment;
increment(); // Output: 1
increment(); // Output: 2


//6.another example of class with method currying

class Adder {
    add(a) {
        return function(b) {
            return a + b;
        }
    }
}
let adder = new Adder();
let add = adder.add(2);
console.log(add(3)); // Output: 5
console.log(add(4)); // Output: 6
console.log(add(5)); // Output: 7


//7.another example of class with getter and setter

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
}

let circle = new Circle(5);
console.log(circle.diameter); // Output: 10
circle.diameter = 12;
console.log(circle.radius); // Output: 6

//8.another example of class with static method and computed property

class Math {
    static add(a, b) {
        return a + b;
    }
    static get PI() {
        return 3.14159;
    }
    static get circleArea() {
        return this.PI * this.radius * this.radius;
    }
}
Math.radius = 5;
console.log(Math.add(2, 3)); // Output: 5
console.log(Math.PI); // Output: 3.14159
console.log(Math.circleArea); // Output: 78.53975


