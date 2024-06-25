//Prototype:

//JavaScript is a prototype-based language, which means it uses prototypes to inherit properties and methods from one object to another.
//In JavaScript, objects can be linked to other objects, forming a prototype chain.
//When a property or method is accessed on an object,
    //the JavaScript engine first checks if that property or method exists on the object itself.
    //If it does not, it will check the object’s prototype, and so on, until it reaches the end of the prototype chain1.

//Prototype - based inheritance is more memory efficient as it allows instances to share properties and methods.
//The extensibility of prototypes offers more flexibility for dynamic modifications at runtime.



//vehicle object
//constructor function , vehicle object 
function Vehicle (make,model,year){
this.make=make;
this.model=model;
this.year=year;
}

//Prototype method
Vehicle.prototype.getAge=function(){
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
}
//car function constructor
function Car(make, model, year, doors) {    
    Vehicle.call(this, make, model, year); //helps to call the parent constructor function
    this.doors = doors;
}

//Inheritance method from vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.DisplayMessage= function(){
    console.log(`This car is a ${this.make} ${this.model} ${this.year} model`);
   
}   

//create Instance of Car
const car1 = new Car('Toyota', 'Camry', 2020, 4);
console.log(car1)
console.log(car1.getAge());
console.log(car1.DisplayMessage());

const car2 = new Car('Toyota', 'Corolla', 2020, 2);
console.log(car2);
console.log(car2.getAge());
console.log(car2.DisplayMessage());

const cars = [new Car('Toyota', 'Camry', 2020, 4),
              new Car('Toyota', 'Corolla', 2020, 2),
    new Car('Toyota', 'Corolla', 2021, 2)];


// console.log(cars);

cars.forEach(car => {
    console.log(car.getAge());
    console.log(car.DisplayMessage());
});
