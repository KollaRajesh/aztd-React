//observable
//Observables are a new way of dealing with asynchronous events in JavaScript.
// observables are a blueprint for creating streams and plumbing them together with operators to create observable chains.
// Observables are lazy Push collections of multiple values.
// Observables are declarative; computation does not start until subscription.
// Observables can be created with create, but usually we use the Observable constructor, the of, from, interval, or other operators.
// Observables are cancellable.
// Observables can be created with an associated Subscription.
// Observables can emit multiple values over time.  

//npm install rxjs


//Example :1
    const { Observable } = require('rxjs');
    const observable = new Observable(subscriber => {
        subscriber.next('Hello, World!');
        subscriber.next('Hello, World!');
        subscriber.next('Hello, World!');
        subscriber.complete();
    });
    observable.subscribe(value => {
        console.log(value);
    });

//Example :2
    const { Observable } = require('rxjs');
    const observable = new Observable(subscriber => {
        subscriber.next('Hello, World!');
        subscriber.next('Hello, World!');
        subscriber.next('Hello, World!');
        subscriber.error('Error!');
        subscriber.complete();
    });
    observable.subscribe(value => {
        console.log(value);
    }, error => {
        console.error(error);
    });

//Example :3

const { Observable } = require('rxjs');
const observable = new Observable(subscriber => {
    subscriber.next('Hello, World!');
    subscriber.next('Hello, World!');
    subscriber.next('Hello, World!');
    subscriber.error('Error!');
    subscriber.complete();
}); 
observable.subscribe(value => {
    console.log(value);
}, error => {
    console.error(error);
}, () => {
    console.log('Complete!');
});

