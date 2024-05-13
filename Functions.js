

// FUNCTIONS IN JAVASCRIPT

// Function is the block of code that execute the specific task
//Functions in JavaScript are reusable blocks of code that can be called from anywhere in your program

// Syntax

//              function function_name(){
//                      code to execute
//              }

// Parameters and Arguments

// Parameters are the variables that are declared in function defination
// while arguments are the values that are passed to the function when it is called.

// exemple

function hello(firstName,lastName){         // Function Parameters
    console.log("hello "+firstName+" "+lastName) 
}

hello("vamsi","krishna")    //Function Arguments  output:-hello vamsi krishna


// We can pass less or more arguments while calling a function
// if we pass less arguments then the rest of the parameters will become undefine
// if you pass more arguments then additional arguments will be ignored.


//Less arguments
hello("vamsi")  //hello vamsi undefined


//More arguments
hello("vamsi","krishna",18)   //hello vamsi krishna


// Default parameters
// Default parameters in JavaScript are parameters that have a default value
// this means that,if the argument is not passed to the function, the default value will be used.

// exemple

function sum(x,y=10){ // y value is 10 default if we pass argument then it is changed
    console.log(x+y); 
}
sum(10) 


// Function Return
// the return statement can be used to return the value,when the function is called.
// The return statement denotes that the functon has ended. Any code after return is not executed

// exemple

function add(a,b){
    return a+b;
}

let res=add(10,20);
console.log(res);


// Callbacks in JavaScript
// A callback is a function passed as an argument to another function.
// A callback function can run after another another function has finished.
//exemple

function display(result){
    console.log(result);
}

function multiply(num1,num2,myCallback){
    let mul=num1*num2;
    myCallback(mul);
}
multiply(10,20,display);


//Anonymous functions
//Anonymous functions in JavaScript that are not declared with a name

//exemple

let s= function(a,b){
    return a+b;
}

console.log(s(10,20))


//RECURSIVE FUNCTION
// A recursive function in JavaScript that calls itself.

//exemple

function countDown(num){
    //Function code
    console.log(num);
    num--
    if(num>=0){
        countDown(num);
    }
}
countDown(10)