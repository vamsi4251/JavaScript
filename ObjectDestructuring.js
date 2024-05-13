//Object destructuring

//Object destructuring in JavaScript is a feature that allows you to extract the properties of an object into variables.

//This can be useful for assigning the properties of an object to variables in a single statement.

//syntax for object destructuring

//  let {property1: variable1 , property2: variable2 } = object

//exemple

const person = {
    firstName : "vamsi",
    lastName : "krishna"
}
const first = person.firstName
console.log(first); //normal accessing


let {firstName : fname , lastName :lname } = person;
console.log(fname)  //destructuring and accessing 

let {firstName , lastName} = person;
console.log(firstName); //another way of destructuring