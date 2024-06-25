// calculateArea function is able to calculate the area of different shapes such as Circle, Rectangle, and Triangle. The function uses instanceof operator to determine the type of the shape and calculate the area accordingly.
function calculateArea(shape) {
        if (shape instanceof Circle) {
            // Calculate area of a circle
            return Math.PI * shape.radius * shape.radius;
        } else if (shape instanceof Rectangle) {
            // Calculate area of a rectangle
            return shape.width * shape.height;
        } else if (shape instanceof Triangle) {
            // Calculate area of a triangle
            return (shape.base * shape.height) / 2;
        } else {
            // Handle unknown shape
            throw new Error("Unknown shape");
        }
    }

// Define Circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

// Define Rectangle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

// Define Triangle class
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
}

// Create instances of different shapes
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

// Calculate areas using the same function
console.log(calculateArea(circle)); // Output: 78.53981633974483
console.log(calculateArea(rectangle)); // Output: 24
console.log(calculateArea(triangle)); // Output: 12