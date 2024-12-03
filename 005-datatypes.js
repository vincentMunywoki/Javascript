//Value in JS is always of a certain type. For example a string or a number.

//8 basic data types in js.
//Any type can be placed in a variable.e.g a variable can be string and store a number.

// no error 
let message = 'hello';
message = 1234567; 
alert(message); 

// -----------Number-----------
  //represent both integer and floating point numbers
  //there are special numeric values which also belong to this data type.
  //Infinity its a special value thats greater than any number. we can get it as a result of  divisin by 
  zero.
  e.g 
alert(1/0);
output:node /tmp/6A8dCCqC8Z.js
Infinity

//NaN Represents a computational error.it is a result of an incorrect or an undeefined mathematical
 operation,
example... 

alert('Not a Number'/3); // Nan,such division is erroneous. 


//-------------BigInt------------------

// In JS the number type cannot store represent integer values larger lager than (2^53-1) 
//(thats 9007199254740991), or less than -(2^53-1) for negatives.

 // BigInt are rarely needed.
  
  //---------------string--------------
  
//  A string in Js must be sorrounded by quotes.
  
let str = "Hello";
let str2 = 'single quotes are ok too';
let phrase = `can embed another ${str}`;

//3 types of quotes in js. 
//Double quotes, single quote and backticks 
//Backticks are "extended functionallity" qotes. 
//They allow us to embed variables and expressions into a sstring by wrapping them in ${...}, for example

let name= 'Vincent';
//embed a variable 
alert(`Hello, ${name}!`); // hello vincent! 

//embed an expression.
alert(`The result is ${3*5}`); // The result is 15

//-------------Boolean (logical type)-------------

//it has only two values true(1) and force(0).
//used to store yes or no values.
 let nameFieldChecked = true;
let ageFieldCheked = false; 

// also may come as aresut of comparison.

let isGreator = 4 > 1;
alert(isGreater); //true(the comparison result is 'yes')

let isGreator = 4 > 1;
alert(isGreator); //true

let isLessor = 7 < 5; 
alert(isLessor); //false

let isGreat = 4 < 1 ;
alert(isGreat); //false

//The null value contains its only null value:

let age = null; //this code states that the age is unknown ,,or empty.

//the undefined value-- it makes a type of its own just like null the meaning of undefined is "value is not 
//assigned"

let age;
alert(age); //node /tmp/HZilGdjwVY.js
undefined

//Seven primitive data types:
//number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
//bigint for integer numbers of arbitrary length.
//string for strings. A string may have zero or more characters, there’s no separate single-character type.
//boolean for true/false.
//null for unknown values – a standalone type that has a single value null.
//undefined for unassigned values – a standalone type that has a single value undefined.
//symbol for unique identifiers.
//And one non-primitive data type:
//object for more complex data structures.
