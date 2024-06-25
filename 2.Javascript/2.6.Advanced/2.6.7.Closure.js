
//Closure
//What is Closure in javascript?
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//In other words, a closure gives you access to an outer function’s scope from an inner function.
//In JavaScript, closures are created every time a function is created, at function creation time.

//Example :1

function outerFunction() {
    var outerVariable = 'I am outside!';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}   

var innerFunc = outerFunction();
innerFunc(); //Output: I am outside!


//Example :2
// Practical Example of Closure

function createCounter() {
    var counter = 0;
    return function () {
        counter = counter + 1;
        return counter;
    }
}

var increment = createCounter();
console.log(increment()); //Output: 1
console.log(increment()); //Output: 2
console.log(increment()); //Output: 3

//Example :3
// Advanced Example of Closure

function createCounter() {
    var counter = 0;
    return {
        increment: function () {
            counter = counter + 1;
            return counter;
        },
        decrement: function () {
            counter = counter - 1;
            return counter;
        }
    }
}

var counter = createCounter();
console.log(counter.increment()); //Output: 1
console.log(counter.increment()); //Output: 2
console.log(counter.decrement()); //Output: 1
console.log(counter.decrement()); //Output: 0

//Example :4
//  Complex Example of Closure

    function createCounter() {
        var counter = 0;
        function increment() {
            counter = counter + 1;
            return counter;
        }
        function decrement() {
            counter = counter - 1;
            return counter;
        }
        return {
            increment: increment,
            decrement: decrement
        }
    }

    var counter = createCounter();
    console.log(counter.increment()); //Output: 1
    console.log(counter.increment()); //Output: 2
    console.log(counter.decrement()); //Output: 1
    console.log(counter.decrement()); //Output: 0

//Example :4
// Closure with Event Listener

    function createCounter() {
        var counter = 0;
        function increment() {
            counter = counter + 1;
            return counter;
        }
        function decrement() {
            counter = counter - 1;
            return counter;
        }
        return {
            increment: increment,
            decrement: decrement
        }
    }
    var counter = createCounter();
    document.getElementById('increment').addEventListener('click', function () {
        document.getElementById('counter').innerText = counter.increment();
    });

    
//Example :5
function person() {
    var name = 'John';
    var age = 25;
    return {
       
        change: function (newName, newAge) {
            name = newName;

            age = newAge!=undefined?newAge:age;
            return { name, age };
        },
        currentInstance: function () {
            return { name, age };
        }
    };
}
personObj = person()
console.log(personObj.currentInstance()); //Output: { name: 'John', age: 25 }
console.log(personObj.change('Jhan')); //Output: { name: 'Jhan', age: 25 }
console.log(personObj.currentInstance()); //Output: { name: 'Jhan', age: 25 }
console.log(personObj.change('Kim', 30)); //Output: { name: 'Kim', age: 30 }  
console.log(personObj.currentInstance()); //Output: { name: 'Kim', age: 30 }


