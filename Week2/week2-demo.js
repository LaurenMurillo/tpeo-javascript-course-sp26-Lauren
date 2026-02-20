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

//hw from slide 33: (run code --> node [fileName.fileType])

//@param side lengths of two different squares
//@return the sum of the areas of these squares
function sumOfSquareAreas(a, b) {
    let areaOne = a ** 2;
    let areaTwo = b ** 2;
    return areaOne + areaTwo;
}

console.log(sumOfSquareAreas(9, 3));//90
console.log(sumOfSquareAreas(5, 10));//125
console.log(sumOfSquareAreas(4, 6));//52

//@param your average for a class on homework, quizzes, and exams, respectively
//@return the value of your overall grade in the class
function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    let homeworkWeight = .10;
    let quizWeight = .15;
    let examWeight = .75;
    //calculations:
    let totalPoints = (homeworkAvg * homeworkWeight) + (quizAvg * quizWeight) + (examAvg * examWeight)
    return totalPoints;
}

console.log(gradeCalculator(100, 85, 90));//90
console.log(gradeCalculator(94, 78, 92));//125
console.log(gradeCalculator(85, 90, 95));//52
