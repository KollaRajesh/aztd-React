// what is loops?
    // loops are used to execute the same block of code a specified number of times.
    // loops are used to iterate over arrays, strings, objects, and other iterable objects.
    // loops are used to iterate over the properties of an object.
    // loops are used to iterate over the characters of a string.
    // loops are used to iterate over the elements of an array.
    // loops are used to iterate over the values of a set.
    // loops are used to iterate over the keys of a map.
    // loops are used to iterate over the entries of a map.
    // loops are used to iterate over the values of a weakset.
    // loops are used to iterate over the keys of a weakmap.
    // loops are used to iterate over the entries of a weakmap.


//1. for loop
    // for loop is used to execute a block of code a specified number of times.
    // for loop is used to iterate over the elements of an array.
    // for loop is used to iterate over the characters of a string.
    // for loop is used to iterate over the properties of an object.
    // for loop is used to iterate over the values of a set.

    //syntax of for loop
    // for (initialization; condition; increment/decrement) {
    //     // code to be executed
    // }

    //example of for loop
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    //another example of for loop with array
    var numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

    //another example of for loop with string
    var str = 'hello';
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
}
    
    //another example of for loop with object
    var person = {
        name: 'John',
        age: 30
    };
    for (let key in person) {  
        console.log(key, person[key]);
    }   // Output: name John, age 30


    //another example of for loop with set
        var set = new Set([1, 2, 3]);
        for (let value of set) {
            console.log(value);
        }   // Output: 1, 2, 3

    //another example of for loop with map
        var map = new Map();
        map.set('name', 'John');
        map.set('age', 30);
        for (let [key, value] of map) {

            console.log(key, value);
        }   // Output: name John, age 30



//2. while loop
    // while loop is used to execute a block of code as long as the condition is true.
    // while loop is used to iterate over the elements of an array.
    // while loop is used to iterate over the characters of a string.
    // while loop is used to iterate over the properties of an object.
    // while loop is used to iterate over the values of a set.
    // while loop is used to iterate over the keys of a map.
    // while loop is used to iterate over the entries of a map.
    // while loop is used to iterate over the values of a weakset.
    // while loop is used to iterate over the keys of a weakmap.
    // while loop is used to iterate over the entries of a weakmap.

    //syntax of while loop
    // while (condition) {
    //     // code to be executed
    // }

//example of while loop
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }


//3. do...while loop
    // do...while loop is used to execute a block of code once, and then it repeats the loop as long as the condition is true.
    // do...while loop is used to iterate over the elements of an array.
    // do...while loop is used to iterate over the characters of a string.
    // do...while loop is used to iterate over the properties of an object.
    // do...while loop is used to iterate over the values of a set.

    //syntax of do...while loop
    // do {
    //     // code to be executed
    // } while (condition);

    //example of do...while loop
        let j = 0;
        do {
            console.log(j);
            j++;
        }
        while (j < 5);


//4. for...in loop
    // for...in loop is used to iterate over the properties of an object.
    // for...in loop is used to iterate over the keys of a map.
    // for...in loop is used to iterate over the entries of a map.
    // for...in loop is used to iterate over the values of a weakset.
    // for...in loop is used to iterate over the keys of a weakmap.
    // for...in loop is used to iterate over the entries of a weakmap.

    //syntax of for...in loop
    // for (variable in object) {
    //     // code to be executed
    // }

    //example of for...in loop
        let person = {
            name: 'John',
            age: 30
        };

        for (let key in person) {
            console.log(key, person[key]);
        }   // Output: name John, age 30

    //another examole of for...in loop with map
        let map = new Map();
        map.set('name', 'John');
        map.set('age', 30);

        for (let key in map) {
            console.log(key, map[key]);
        }   // Output: name John, age 30


//5. for...of loop
    // for...of loop is used to iterate over the elements of an array.
    // for...of loop is used to iterate over the characters of a string.
    // for...of loop is used to iterate over the values of a set.

//syntax of for...of loop
// for (variable of iterable) {
//     // code to be executed
// }

    //example of for...of loop
        let numbers = [1, 2, 3, 4, 5];
        for(let number of numbers) {
            console.log(number);
        }   // Output: 1, 2, 3, 4, 5

//7. nested loops
    // nested loops are loops inside another loop.
    // nested loops are used to iterate over the elements of a two-dimensional array.
    // nested loops are used to iterate over the characters of a two-dimensional array.
    // nested loops are used to iterate over the properties of an object inside another object.

//example of nested loops

    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }   // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9

//8. loop control statements
    // loop control statements are used to control the flow of a loop.
    // loop control statements are used to break the loop.
    // loop control statements are used to continue the loop.
    // loop control statements are used to skip the current iteration of a loop.
    // loop control statements are used to exit the loop.

    // syntax of loop control statements
        // break;
        // continue;

    // example of loop control statements

        for (let i = 0; i < 5; i++) {
            if (i === 3) {
                break;
            }
            console.log(i);
        }   // Output: 0, 1, 2

        for (let i = 0; i < 5; i++) {
            if (i === 3) {
                continue;
            }
            console.log(i);
        }   // Output: 0, 1, 2, 4

//9. infinite loops
    // infinite loops are loops that run forever.
    // infinite loops are used to execute a block of code repeatedly without stopping.

    //example of infinite loops
        for (let i = 0; i >=0; i++) {
            console.log(i);
        }

//10. loop optimization
    // loop optimization is the process of improving the performance of a loop.
    // loop optimization is used to reduce the time complexity of a loop.
    // loop optimization is used to reduce the space complexity of a loop.

    //example of loop optimization
        let sum = 0;
        for (let i = 1; i <= 100; i++) {
            sum += i;
        }
        console.log(sum);    // Output: 5050
