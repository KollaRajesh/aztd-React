// Arrays
// Add items to the end of an array with push() and to the beginning with unshift()
// Remove items from the end with pop() and from the beginning with shift()
// Find the index of an item with indexOf() and remove items by index with splice()
// Filter an array with filter() and test its elements with every() and some()
// Find items with find() and findIndex() and test if an item is in an array with includes()
// Copy an array with slice() and merge arrays with concat()
// Iterate over an array with forEach() and transform it with map()
// Sort an array with sort() and reverse() it with reverse()
// Remove items from an array with filter() and remove duplicates with new Set()
// Flatten a nested array with flat() and remove empty slots with flatMap()
// Convert an array-like object to an array with Array.from() and Array.of()
// Create an array with a fixed length with Array.of() and fill() it with fill()

// Add examples for each of the above methods
// Add examples for the following methods: join(), toString(), toLocaleString(), and lastIndexOf()

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Initial array:', arr);

// Add items to the end of an array with push() and to the beginning with unshift()
var number =11
arr.push(number);
//string interpolation
console.log(`After push ${number} number to array:`, arr);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Initial array:', arr);
var number =0
arr.unshift(number);
console.log(`After unshift ${number} number to array:`, arr);

// Remove items from the end with pop() and from the beginning with shift()
var books = ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Quantum Mechanics', 'Relativity'];
console.log('Initial array:', books);
books.pop();
console.log(`After pop last element from array:`, books);
books.shift
books.shift(`After shift first element from array:`, books);

//splice() method
    //add two values using splice
        openAiStacks.splice(4, 0, 'GPT-6', 'GPT-7'); // 0 means no element will be removed and 'GPT-6' and 'GPT-7' will be added at index 4
        console.log(`After adding GPT-6 and GPT-7 at index 4:`, openAiStacks);
    // Copy an array with slice() 
        var technologies = ['AI', 'ML', 'DL', 'NLP', 'CV', 'IoT', 'Blockchain'];
        console.log('Initial array:', technologies);
        var copy = technologies.slice();
        console.log(`Copy of array:`, copy);

    // Copy an particular portion of array with slice() 
        var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya'];
        var copy = fruits.slice(2, 5);
    console.log(`Copy of array from index 2 to 5:`, copy); 

    //merge arrays with concat()
        var vegetables = ['Potato', 'Tomato', 'Onion', 'Carrot', 'Cabbage', 'Spinach', 'Broccoli'];
        console.log('First array:', vegetables);
        var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya'];
        console.log(`Second array:`, fruits);
        var merged = vegetables.concat(fruits);
        console.log(`Merged array:`, merged);

// Find the index of an item with indexOf() and remove items by index with splice()
    var openAiStacks = ['OpenAI', 'GPT-3', 'DALL-E', 'CLIP', 'Codex', 'GPT-4','Gemini','Azure OpenAI'];
    var index=openAiStacks.indexOf('GPT-4')
    console.log(`Index of 5 is:`, index);
    //remove element with index using splice
    openAiStacks.splice(index, 1);
    console.log(`After removing element with index ${index}:`, openAiStacks);
    //add value using splice
    openAiStacks.splice(3,0,'GPT-5'); // 0 means no element will be removed and 'GPT-5' will be added at index 3
    console.log(`After adding 5 at index 3:`, openAiStacks);

// Filter an array with filter() and test its elements with every() and some()
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Initial array:', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var even = numbers.filter((number) => number % 2 === 0);    //filter even numbers
console.log(`Even numbers:`, even); // [2, 4, 6, 8, 10]
    
// Find items with find() and findIndex() and test if an item is in an array with includes()
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Initial array:', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
var found = numbers.find((number) => number > 5); //find first number greater than 5
     console.log(`First number greater than 5:`, found); // 6    
    
     var found = numbers.findIndex((number) => number > 5); //find index of first number greater than 5  
     console.log(`Index of first number greater than 5:`, found); // 5
var found = numbers.includes(5); //check if 5 is present in array
console.log(`5 is present in array:`, found); // true

// Iterate over an array with forEach() and transform it with map()
    var countries = ['India', 'USA', 'UK', 'Canada', 'Australia', 'Japan', 'China', 'Russia'];
    console.log('Initial array:', countries); // ['India', 'USA', 'UK', 'Canada', 'Australia', 'Japan', 'China', 'Russia']
    countries.forEach((countries, index) => {
         console.log(`Number at index ${index} is ${countries}`); // India, USA, UK, Canada, Australia, Japan, China, Russia
     });
//map() method
    // The map() function in JavaScript is a higher-order function that iterates over each element of an array,
    // allowing you to apply a specified function to each element
    //This function creates a new array by applying a provided function to each element of the original array.
    // It does not mutate the original array.
    
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Initial array:', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var squared = numbers.map((number) => number * number); //square each number    
    console.log(`Squared array:`, squared); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//filter() method
    // The filter() function in JavaScript is a higher-order function that iterates over each element of an array,
    // allowing you to apply a specified function to each element.
    // This function creates a new array containing only the elements that pass a specified condition.
    // The filter() function does not mutate the original array.
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Initial array:', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var even = numbers.filter((number) => number % 2 === 0); //filter even numbers
    console.log(`Even numbers:`, even); // [2, 4, 6, 8, 10]

//reduce() method
    // The reduce() function in JavaScript is a higher-order function that iterates over each element of an array,
    // allowing you to apply a specified function to each element.
    // This function reduces the array to a single value by applying an accumulator function to each element.
    // The accumulator function takes two arguments: the accumulator and the current element.
    // The reduce() function can be used to calculate the sum of all elements in an array, find the maximum or minimum value, or perform other operations.  
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Initial array:', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var sum = numbers.reduce((acc, number) => acc + number, 0); //calculate sum of all numbers  
    console.log(`Sum of all numbers:`, sum); // 55

//sort() method
// The sort() function in JavaScript is a higher-order function that iterates over each element of an array,
// allowing you to apply a specified function to each element.
// This function sorts the elements of an array based on a comparison function.
    var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya'];
    console.log('Initial array:', fruits); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya']
    //desending order
    fruits.sort((a, b) => b.localeCompare(a)); //sort the array in descending order
    console.log(`Sorted array:`, fruits); // ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange', 'Papaya', 'Pineapple']
    //ascending order
    fruits.sort(); //sort the array in ascending order
    console.log(`Sorted array:`, fruits); // ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange', 'Papaya', 'Pineapple']


        
//test its elements with every()
    var numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var allEven = numbers.every((number) => number % 2 === 0);  //check if all numbers are even
    console.log(`All numbers are even:`, allEven); //false
    var numbers = [2, 4, 6, 8, 10];
    var allEven = numbers.every((number) => number % 2 === 0);  //check if all numbers are even
    console.log(`All numbers are even:`, allEven); //true


//test its elements with some()
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var someEven = numbers.some((number) => number % 2 === 0);  //check if some numbers are even
    console.log(`Some numbers are even:`, someEven); //true
    var numbers = [1, 3, 5, 7, 9];
    var someEven = numbers.some((number) => number % 2 === 0);  //check if some numbers are even
    console.log(`Some numbers are even:`, someEven); //false

    // Sort an array with sort() and reverse() it with reverse()
        var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya'];
        console.log('Initial array:', fruits); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya']
    //descending order
        fruits.sort((a, b) => b.localeCompare(a));
        console.log(`Sorted array in descending order:`, fruits); // ['Pineapple', 'Papaya', 'Orange', 'Mango', 'Grapes', 'Banana', 'Apple']

    //ascending order
    fruits.sort() //sort the array
    console.log(`Sorted array:`, fruits); // ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange', 'Papaya', 'Pineapple']
    //reverse the array
    fruits.reverse(); //reverse the array
    console.log(`Reversed array:`, fruits); // ['Pineapple', 'Papaya', 'Orange', 'Mango', 'Grapes', 'Banana', 'Apple']
    
   //another example

    let colors =[
                    {id:1, name:"red"},
                    {id:51, name:"green"},
                    {id:3, name:"blue"},
                    {id:10, name:"yellow"},
    
                ]
    //arrange the colors in ascending order of id
    colors.sort((a, b) => a.id - b.id);
    console.log('Ascending order of id:', colors);

    //arrange the colors in ascending order by value 
    colors.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Ascending order of name:', colors);


    //arrange the colors in desending order of id
    colors.sort((a, b) => b.id - a.id);
    console.log('Descending order of id:', colors);

    //arrange the colors in desending order by value 
    colors.sort((a, b) => b.name.localeCompare(a.name));
    console.log('Descending order of name:', colors);

//Remove items from an array with filter() and remove duplicates with new Set()
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Initial array:', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var filtered = numbers.filter((number) => number !== 5); //remove 5 from array
    console.log(`After removing 5:`, filtered); // [1, 2, 3, 4, 6, 7, 8, 9, 10]

    //remove duplicates with new Set()
    var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Apple', 'Banana', 'Mango', 'Grapes'];
    console.log('Initial array:', fruits); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Apple', 'Banana', 'Mango', 'Grapes']
    var unique = [...new Set(fruits)]; //remove duplicates
    console.log(`After removing duplicates:`, unique); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple']


// Flatten a nested array with flat() and remove empty slots with flatMap()

    var nested = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
    console.log('Initial array:', nested); // [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
    var flat = nested.flat(); //flatten the array
    console.log(`Flattened array:`, flat); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    var OpenAIModels = ['GPT-3', 'DALL-E', 'CLIP', 'Codex', 'GPT-4', 'Gemini', 'Azure OpenAI'];
    console.log('Initial array:', OpenAIModels); // ['GPT-3', 'DALL-E', 'CLIP', 'Codex', 'GPT-4', 'Gemini', 'Azure OpenAI']
    var flat = OpenAIModels.flatMap((model) => [model, 'OpenAI']); //add 'OpenAI' after each model
    console.log(`After adding 'OpenAI' after each model:`, flat); // ['GPT-3', 'OpenAI', 'DALL-E', 'OpenAI', 'CLIP', 'OpenAI', 'Codex', 'OpenAI', 'GPT-4', 'OpenAI', 'Gemini', 'OpenAI', 'Azure OpenAI', 'OpenAI']


// Convert an array-like object to an array with Array.from() and Array.of()

    var arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };  
    console.log('Array-like object:', arrayLike); // {0: 'a', 1: 'b', 2: 'c', length: 3}
    var array = Array.from(arrayLike); //convert array-like object to array
    console.log(`Converted array:`, array); // ['a', 'b', 'c']

// Create an array with a fixed length with Array.of() and fill() it with fill()
    var filled = Array.of(5).fill(0); //create an array of length 5 filled with 0
    console.log(`Array of length 5 filled with 0:`, filled); // [0, 0, 0, 0, 0]
    
// Add examples for the following methods: join(), toString(), toLocaleString(), and lastIndexOf()

var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya'];
console.log('Initial array:', fruits); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya']
 
    //join() method
        var joined = fruits.join(', '); //join elements with comma
        console.log(`Joined array:`, joined); // Apple, Banana, Mango, Grapes, Orange, Pineapple, Papaya

    //toString() method
        var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya'];
        console.log('Initial array:', fruits); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya']
        var string = fruits.toString(); //convert array to string
    console.log(`Array as string:`, string); // Apple,Banana,Mango,Grapes,Orange,Pineapple,Papaya
        
    //toLocaleString() method
        var numbers = [1000, 2000, 3000, 4000, 5000];
        console.log('Initial array:', numbers); // [1000, 2000, 3000, 4000, 5000]
        var string = numbers.toLocaleString(); //convert array to localized string
        console.log(`Array as localized string:`, string); // 1,000, 2,000, 3,000, 4,000, 5,000
        
    //lastIndexOf() method
        var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya', 'Mango'];
        console.log('Initial array:', fruits); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya', 'Mango']
        var index = fruits.lastIndexOf('Mango'); //find last index of 'Mango'
        console.log(`Last index of 'Mango':`, index); // 7
        
    //lastIndexOf() method
        var fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya', 'Mango'];
        console.log('Initial array:', fruits); // ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Pineapple', 'Papaya', 'Mango']
        var index = fruits.lastIndexOf('Mango'); //find last index of 'Mango'
        console.warn(`Last index of 'Mango':`, index); // 7

// callback function in array methods
// A callback function is a function passed as an argument to another function.
// It is executed after the completion of the parent function.
// Callback functions are used in array methods to perform operations on array elements.
// Examples of array methods that accept callback functions include forEach(), map(), filter(), reduce(), and sort().
// Add examples for each of the above methods

//forEach() method

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Initial array:', numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((number) => {
    console.log(`Number:`, number); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}); 
