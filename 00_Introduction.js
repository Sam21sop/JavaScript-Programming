/* 
What is javascript

- Programming Language
- Scripting 
- enable to change conent dynamically
*/


/*
Javascript Statemenr are composed of 

1. values
2. operators
3. Expression 
4. Keywords
5. Comments
*/


/*
Javascript Comment

1. Single line comment ==> //
2. Multiline comment ==> /* *\/
*/


/*
Javascript Variables

variable are container to store data
1. var
2. let
3. const
4. atomatically
*/


/*
- let 

1. have block scope
2. you can declare it before used
3. can not be redeclared in the same scope
*/


/*
- const

1. con not redeclare
2. can not reassigned
3. have block scope
*/


/*
Javascript Operator

1. arithmetic (+, -, *, /, **, %, ++, --)
2. assignment (=, +=, -=, *=, /=, %=, **=)
3. comparision (==, ===, !=, !==, >, <, >=, <=)
4. logical (&&, ||, !) 
5. bitwise (&, |, ~, ^, <<, >>, >>>)
6. ternary (?)
7. type (typeof, instanceof)
*/


/*
Javascript Data Types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Object
7. Symbol
8. Bigint(rarely use case)

- primitive (immutable data types) ==> string, number, boolean, undefined, null, symbol, bigint
- non-primitive (Mutable data types) ==> function, object, array
*/


/*
Javascript object

- object is collections of Properties
- property is association between key:value pair
- object can also have method
- Method are action that can be perform on object
*/


/*
Javascript String

- string are storing for text data type
- you can use single('') or double("") quotes to declare js string
- template string (``) backticks
- template string allow multiline strings
*/

/*
Javascript Array

- array is linear data strucutre which hold multiple data/value in single variable
- creating by using ==> [value1, value2,...]
- new Array(value1, value2, ...)
- array are special type of object 
*/


/*
Javascript Conditions

- perform different action based on condition
- if ==> block of code to be executed, if condition is true
- else ==> block of code to be executed, if same condition is false
- else if ==> specify new condition to test, if first condition is false
- switch  ==> specify many aleternative block of code to be executed
*/


/*
javascript loops

- block of code can be executed number of times.
- js support different kind of loop
1. for ==> number of time to execute block of code
2. for/in ==> loop through the properties of object
3. for/of ==> loop through the value of an iterable object
4. while ==> simple loop untile condition is true
5. do/while ==> 
*/


/*
Javascript Error

- try ==> statement define a code of block to run
- catch ==> statement define code a block to handle any error
- finally ==> statement define  code a block to run any how
- throw ==> define the custome error
*/



/*
Javascript Scope

- scope define the visibility of the variables
1. block scope ==> {} // you can not access the variables outside of the block
2. functional scope
    - eact function create new scope 
    - variables define inside a function can not accessible outside the fuction
    - functional scope also known as local scope
3. global scope
    - variable accessible from anywhere
*/


/*
Javascript this keyword

- thid keyword refers to an object
- alone, this refers to global object
- in an event, this refer to the element that recieved the event
- in function, in use strict mode this refers undefined
*/


/*
Javascript Fuctions

- Function block of code designed to perform a particular task again and again
- code reusablility
- DRY principal

- parameter listed inside the function defination
- arguments are actual values recieved by function when it id invoked

- arrow function
    - shorter syntaxt of function
    - arrow function return value by default
    - with the arrow function there is no binding of this keyword
*/


/*
Javascript Classes

- js classes are template for js object
- create a clsas using class keyword
- js class have constructor() method
- js class is not object

- constructor()
    - it is executed automatically when new object created
    - it is used to initialized object properties
    - if you don't define constructor method, js will automatically add an empty constructor method
*/


/*
Javascript Modules

- js modules aloow you to break up code into separate file
- this is easy to maintain code base
- js module store functions and variable in external file
- modules imported using import statement
- there are two types of export: names export and default exports
*/


/*
Javascript Object

- in javascript, everything is an object
- object written in the form of key:value pair
- JS object is collection of named value
- the named values in js object are called properties
- object properties can be both primitive values, other object and function 
- javascript object are mutable

Object Properties
    - property are the value associated with a js object
    - it is collection of unordered properties
    - property can useully be changed, added, deleted but some are read only
    - accessing properties: object.propertyName or object["propertyName"]

Object Method
    - method are functions stored as object properties
    - access object method: objectName.methodName()

Object Prototype
    - all js object inherit properties and methods from prototype
    - js prototype property allow us to add new properties to object constructor
    - syntax: objectName.prototype.propertyName = propertyValue
    - js prototype allow us to add new method to object constructor
    - syntax: objName.prototype.methodName = function(){
        return this.propertyName;
    }
*/


/*
Javascript Function

- Function Declaration
    - function functionName(parameters){
        // code to be executed
    }

- anonymous function
    - function(parameter){
        // code to be executed
    };
    - it is also called nameless function

- self-Invoking function
    - (function(){
        // code to be executed
    })();

- Arrow Function
    - const x = (parameters) => {
        // code to be executed
    }
*/


/*
Javascript Function Parameter and Arguments

- parameter are the name listed in the function defination
- argument are the real value passes to the function

*/
