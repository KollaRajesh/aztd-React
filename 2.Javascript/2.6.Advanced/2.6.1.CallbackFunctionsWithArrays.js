//Example :1
//isEven function
    function isEven(num) {
        
        return num % 2 === 0;
    }

    function GetEvenNumbers(numbers, isEven) {
    let evenNumbers = [];
        for (var i = 0; i < numbers.length; i++) {
            if (isEven(numbers[i])) {
            evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;
    }
GetEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven); // [2, 4, 6, 8, 10]

//Example :2

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Initial array:', numbers);
var even = numbers.filter((number) => number % 2 === 0);
//var even = numbers.filter(function(number) { return number % 2 === 0; });
console.log(`Even numbers:`, even);

//Example :3
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log('Initial array:', numbers); 
    var squared = numbers.map((number) => number * number); 
    //var squared = numbers.map(function(number) { return number * number; });
    // function add(a) {
    //     return a + 2;
    // }
    //var added = numbers.map(add);
console.log(`Squared array:`, squared);

//Example :4
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log('Initial array:', numbers);
    var sum = numbers.reduce((acc, number) => acc + number, 0);
    //var sum = numbers.reduce(function(acc, number) { return acc + number; }, 0);     
console.log(`Sum:`, sum); 
    
//Example :5
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log('Initial array:', numbers);
    var sum = numbers.reduce((acc, number) => acc + number, 0);
    //var sum = numbers.reduce(function(acc, number) { return acc + number; }, 0);
console.log(`Sum:`, sum);
    



        

    




