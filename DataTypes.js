// DATA TYPES:

//         JavaScript provides different data types to hold different types of values. 
//         There are two types of data types in JavaScript.
//             1.Primitive data type
//             2.Non-primitive (reference) data type
//         JavaScript is a dynamic type language, means you don't need to specify type of the variable because 
//         it is dynamically used by JavaScript engine. You need to use var here to specify the data type. 
//         It can hold any type of values such as numbers, strings etc

// Primitive data type:

//STRING:
//  In JavaScript, a string is a sequence of zero or more characters.
//  A string starts and ends with either a single quote(') or a double quote (").
//  JavaScript strings are for storing and manipulating text .

let firstName='vamsi' //single quote
let seconeName="krishna" //double quote

console.log(firstName,seconeName)

// NUMBER
//      Number represents integer and floating-point numbers.

let a=100  //100
let b=96.5 //96.5
let c=96.0 //96
let d=96.1 //96.1
let e=96.00 //96
console.log(a,b,c,d)

//BOOLEAN
//    The boolean type has two values: true and false.

let learning=true;
let completed=false;
console.log(learning,completed) //true false
console.log(typeof learning,typeof completed) //boolean boolean


//UNDEFINED
//      If a variable is declared but the value is not assigned, then the value of that variable will be undefined .
//      And the data type is also undefined.

let age;
console.log(age,typeof age) // undefined 'undefined'

//NULL

//      In the JavaScript, null is a special value that represents empty or unknown valuel

let x = null;
console.log(x, typeof x); //null 'object'

// The type should be "null" but it says the type is object.
// It is a known bug in JavaScript.
// JavaScript defines that null is equal to undefined

console.log(null == undefined) //true




//2.Non-primitive (reference) data type

//OBJECT
//      JavaScript, an object is a collection of properties.
//      where each property is defined as a key-value pair.

let person = {
    firstName: 'Elon',
    lastName: 'Musk',
    age :35
}

console.log(person, typeof person) //{firstName: 'Elon', lastName: 'Musk', age: 35} 'object'

//ARRAY
//  Arrays are a type of object that stores a collection of Values.

let arr = [1,2,3,4,5]
console.log(arr, typeof arr) // [1, 2, 3, 4, 5] 'object'

//FUNCTION
//       Functions are a object that can be used to execute code
function msg(){
    console.log("hello")
}
console.log(typeof msg) //function

