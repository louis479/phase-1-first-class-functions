
// function receivesAFunction(callback) {
//     callback();
//   }
  

//   function returnsANamedFunction() {
//     return function namedFunction() {
      
//     };
//   }
  
  
//   function returnsAnAnonymousFunction() {
//     return function() {
      
//     };
//   }
  
// Define the functions
function receivesAFunction(callback) {
  callback(); // Call the passed-in function
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I am a named function!");
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("I am an anonymous function!");
  };
}

// 1. Passing a function to `receivesAFunction`
function sayHello() {
  console.log("Hello from the callback!");
}
receivesAFunction(sayHello); // Output: Hello from the callback!

// Using an anonymous function directly
receivesAFunction(() => console.log("Hello from an inline anonymous function!")); // Output: Hello from an inline anonymous function!

// 2. Getting a named function and calling it
const namedFunc = returnsANamedFunction();
namedFunc(); // Output: I am a named function!

// 3. Getting an anonymous function and calling it
const anonFunc = returnsAnAnonymousFunction();
anonFunc(); // Output: I am an anonymous function!
