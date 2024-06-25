//What is async/await in javascript?

//The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
//The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.
//If the Promise is rejected, the await expression throws the rejected value.

//The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs.
// The behavior of async / await is similar to combining generators and promises.


//Example :0
//async function
    function asyncFunction(callback) {
        setTimeout(() => {
            callback('Hello, World!');
        }, 1000);
    }
    asyncFunction((result) => {
        console.log(result);
    }); 


//Example :1
    async function asyncFunction() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello, World!');
            }, 1000);
        });
    }
    async function main() {
        var result = await asyncFunction();
        console.log(result);
    }
main();
    
//Example :2
    async function asyncFunction() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error!');
            }, 1000);
        });
    }
    async function main() {
        try {
            var result = await asyncFunction();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }