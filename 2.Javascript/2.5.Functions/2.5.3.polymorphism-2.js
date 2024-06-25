// Polymorphism in JavaScript
let circle = (radius) => {
    return Math.PI * radius * radius;
}

// Calculate area of a square
let square=(side)=>{
    return side*side;
}

// Calculate area of a rectangle
let rectangle=(side1, side2)=>{
    return side1*side2;
}

// Calculate area of different shapes
let shape = (type, side1, side2) => {
    if (type === 'circle') {
        return circle(side1);
    } else if (type === 'square') {
        return square(side1);
    } else if (type === 'rectangle') {
        return rectangle(side1, side2);
    }
    else {
        throw new Error("Unknown shape");
    }
}

// Calculate areas using the same function
console.log(shape('circle', 5)); // Output: 78.53981633974483
console.log(shape('square', 4)); // Output: 16
console.log(shape('rectangle', 4,3)); // Output: 12
//console.log(shape('triangle', 3, 8)); // Error: Unknown shape