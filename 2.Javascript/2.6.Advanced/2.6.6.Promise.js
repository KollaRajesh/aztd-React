//Promise is a built-in object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise of having a value at some point in the future.
//A Promise is in one of these states:
    //pending: initial state, neither fulfilled nor rejected.
    //fulfilled: meaning that the operation completed successfully.
    //rejected: meaning that the operation failed.
//A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is

// Example :1
function asyncFunction() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello, World!');
            }, 1000);
        });
    }
    asyncFunction().then((result) => {
        console.log(result);
    }); 

//Example :2

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error!');
        }, 1000);
    });
}
asyncFunction().then((result) => {
    console.log(result);
}, (error) => {
    console.error(error);
});






