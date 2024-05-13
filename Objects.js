// Objects in JavaScript
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// syntax

// const obj_name={
//     key1 : value1 ,
//     key2 : value2 ,
// }

// exemple 


const person ={
    firstName : "vamsi",
    lastName : "krishna",
    age : 21
}

// When we declare a function as a value in key:value pair then it is known as Methods.

//Accessing
console.log(person);
console.log(person.firstName);
console.log(person['firstName']); 

//updating

person.age = 18;
console.log(person.age);

//adding new properties

person.company = "Tesala";
console.log(person);

// deleting properties
delete person.age;
console.log(person);

// Checking if a property exixts

console.log("firstName" in person);


//nested object

const personOne = {
    firstName : "vamsi",
    lastName : "krishna",
    age : 21,
    address :{
        village : "thantikonda",
        pinCode : "533286"
    }
}

// Accessing
console.log(personOne.address.pinCode);


// Create an object with "new" keyword

const personTwo = new Object(); //Creating
personTwo.firstName = "vamsi";  //Adding
personTwo.lastName = "krishna"

console.log(personTwo)


// JavaScript Object Methods
//JavaScript method is an object property that contains a function definition.

const personThree = {
    firstName : "vamsi",
    lastName : "krishna",
    hello : function hello(){
        console.log("hello");
    },
    myName(){
        console.log("this is name function");
    }
}
personThree.hello();
personThree.myName()



// this keyword

// To access the other properties of an object within a method of the same object. we can use "this" kevword.

// exemple

const person1 = {
    firstName : "vamsi",
    lastName : "krishna",
    hello : function(){
        console.log("hello " + this.firstName);
    }
}
person1.hello();

//When we use "this" keyword within a method, it refers to the same object.
// If we use "this" keyword alone, or inside a function. Then it will refer to the Global object, that is "window" object.
// When we use "this" key word in the "Event" then it will refer to the element that receive the event.
// "this" is a keyword, it is not a variable, so we can't change the value of "this".


const person2 = {
    firstName : "vamsi",
    lastName : "krishna",
    getFullName : function(){
        return this.firstName + " "+ this.lastName;
    }
}
console.log(person2.getFullName())


// Constructor Function
// In JavaScript, a constructor function is used to create objects.
// Constructor function is similar as a regular function but it is good practice to capitalize the first letter of your constructor function.
// A constructor function should be called only with "new" operator.
function Person3(first,last){
    this.firstName = first,
    this.lastName = last
}

const person3 = new Person3("vamsi","krishna");
console.log(person3);

person1.age = 52; //adding the property 
console.log(person3);


//JavaScript object Prototype
//In JavaScript, every function and object has its own property called prototype.
//A prototype itself is also another object. So, the prototype has its own prototype. This creates a prototype chain.

//Prototype inhertiance
//We can use the Prototype to add properties and methods to a constructor function.
//And objects inherit the properties and methods from a prototype.

function PersonInfo(fname,lname){
    this.firstName=fname,
    this.lastName=lname
}

PersonInfo.prototype.gender = 'male'; // adding gender property to PersonInfo function

PersonInfo.prototype.getName = function(){  // adding function to PersonInfo function
    return this.firstName+ ' '+this.lastName;
}
const personinfo1 = new PersonInfo("vamsi","krishna");
const personinfo2 = new PersonInfo("satya", "sandeep");
console.log(personinfo1.getName());


