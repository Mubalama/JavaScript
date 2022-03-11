// This is the java script code
//console.log("Hello world");

// Variables
let firstName = 'Richard'; // String
let lastName = 'Bentana';
console.log(firstName, lastName);

// Constant : unchanged variable
const surName = 'Mubalama';
//surName = 'something';

// Variable Type (Primitive type)

//let name ='Rich'; // String
let age = 30; // Number literal (Interger)
let isApproved = true; //Boolean
let nullValue = null; // Explicitly clear the value of the variable

// Reference Type : Object, Array, Function

// Create a person object assign key value pair
let person = {
    name: 'Rich',
    age: 30
};

// Access the property of an Object
// 1. Dot Notation
person.age = 32;

// 2. Bracket Notation
person['name'] = 'Mary';

console.log(person.name);

/// Arrays

//let selectedColors = []; //Empty array
let selectedColors =['red', 'blue']; // Initialized array
// Add an element to an array as it variable is dynamic
selectedColors[2] = 'green';
// Accessing array element we use index example: 0,1,2,3
console.log(selectedColors[0]);
console.log(selectedColors);


////// Functions
// Performing a task

// Funtion without parametter
function greet(){
    console.log('Hello world');
}
// Call a function
greet();

// Function with parametter
function hello(name){
    console.log('Hello ' + name);
}
// Call a function
hello('mubalama');

/// Function performing calculation
function square (number){
    return number * number;
}
let number = square(2)
console.log(number);
