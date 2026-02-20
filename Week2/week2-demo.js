// WEEK 2 DEMO: Values, Variables, Functions
// Task: Write a function to calculate the area of a triangle


// Write your function here
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
} 

// Define some variables to test it here
let base = 5;
let height = 2;

console.log(calculateTriangleArea(base,height))
// Able to reassign

// Call your function here!
const pi = 3.141592653
function calculateCircleArea(radius) {
    return radius * pi * radius;
}

let radius = 3;
console.log(calculateCircleArea(radius));

function cylinderVolume(radius, height){
    return pi * (radius ** 2) * height;
}

console.log(cylinderVolume(radius, height));
//_name means it is "private"
