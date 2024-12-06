One of fudamental characteristics of a programming language is the set of data types it supports.
Javascript allows a programmer to work with three primitive data types.
   .Numbers eg 123, 120.50
   .Strings of text eg "This is text string"
   .Booleaan eg true or false.
   
 Javascript also defines two trivial data types,NULL and UNDEFINED each defines a single value.
 Javascript supports a commposite data type known as OBJECT. 
 
 A variable is a named storage for data.    We can use variables to store goodies,visitors and other data.
 the let keyword is used to create a variable in javascript.
   
 
 EXAMPLE 
JS cannot be used for networking apps because it does not support such.

let message; 

we can  put some data into it using assigment operator "=" so,

let message;
message='Hello my people!'; //store the string 'Hello my people' in the variable named message

Now that the string is saved into the memmory area associated with the variable,we can access it using the 
variable name: 

let message;
message='Hello my people!';
alert(message); // shows the variable content

To be brief, we can combine the variable declaration and assignment into a single line.

let meassege = 'Hello my people'; // define the variable and assign value.
alert(message); //Hello my people


Multiple variables can also be declared in one line.

Let user = 'vincent',age = '22',message = 'Hello vincent'; //This one is shorter but is not recommended.
                                                      use single line per varible for better readability.
                                                      
                                                      
 Multiple vaariant is a bit longer, bit easier to read:
let user = 'vincent';
let age = '22';
let message= 'Hello vincent'; 

      OR 
      
 let user = 'vincent',
     age = '22',
     message = 'Hello vincent'; 


We can declare two variables and copy data from one into the other.
example...

let hello = 'hello world';
let message = hello; //copying Hello word from hello into message 

//now the two variables hold the same data
alert(hello); // hello world
alert(message) // hello world

Variable naming
-------rules------
  .The name must contain only letters,digits or the symbols$ and_.
  .The first character must not be a digit.
  
  example of valid names: 
         let userName;
         let test123;


------constants--------

To declare a constant(unchanging) variable, use const insted of let:

        const myBirthday = '05.05.2000';

Variables declared using const are called constants. They cannot be reassigned.An attempt 
to do so would cause an error.

       const myBirthday = '05.05.2000';
       const myBirthday = '03.04.2004'; //eror,can't reassign the constant! 


Uppercase constants

To use constants as aliases for difficult-to-remember values that are known prior tovexecution.
such constants are named using capital letters and underscores.
example...

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "00F"; 

//...when we need to pick a color 

let color = COLOR_BLUE;
alert(color); //#00F

