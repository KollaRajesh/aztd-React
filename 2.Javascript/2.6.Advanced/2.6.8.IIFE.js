//What is iIFE (Immediately Invoked Function Expression)?
//IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
    //The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
    // This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
    //The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.

//The syntax for IIFE is:
    // (function () {
    //      logic here
    // })();
//
    

//Example :1
(function () {
    console.log('Hello, World!');
})(); //Output: Hello, World!

//Example :2
var result = (function () {
    var name = 'John';
    return name;
}
)();
console.log(result); //Output: John

//Example :3
var result = (function (a, b) {
    return a + b;
}
)(10, 20);
console.log(result); //Output: 30


//example 4
var result = (function () {
    var name = 'John';
    var age = 25;
    return {
        name: name,
        age: age
    };
}
)();
console.log(result); //Output: Object { name: "John", age: 25 }
console.log(result); //Output: Object { name: "John", age: 25 }

//example 5
var result = (function () {
    var name = 'John';
    var age = 25;
    return {
        name: name,
        age: age,
        change: function (newName) {
            name = newName;
            age = 26;
        }
    };
}
)();

console.log(result.name); //Output: John
console.log(result.age); //Output: 25
result.change('Jane');
console.log(result.name); //Output: John
console.log(result.age); //Output: 25

