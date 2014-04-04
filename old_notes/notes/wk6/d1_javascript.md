#JavaScript Intro

##History

JavaScript was developed in 1995 by Brendan Eich in a few days for Netscape.

The purpose of the language was to add a client-side scripting language interpreter to the Netscape browser that altered the document and interact with the user.

### How JavaScript is used
According to separation of concerns, where CSS ought to handle styling of a document and HTML handle its content organization, JavaScript ought to handle the behavior and interaction between the user and the document.

###Why use JavaScript?

JavaScript is perhaps the world's most widely consumed code and whose interpreters are the most ubiquitous.  Why?  Browsers.  Most modern web browsers include a JavaScript interpreter.

##Data Types

JavaScript is ``weakly`` and ``dynamically`` typed.  It's type system has also been referred to as "duck" typing.  If it acts like a duck, that is if an object accepts the methods of a duck and returns the same values, it is a duck.

That may seem to make it similar to Ruby, but it's typing is far more ambiguous than Ruby's since the language has no "classes".  That being said, there are a few "types" (none of which can be reliably and consistently checked using the "typeof" keyword so try to avoid it.)

- Number
- Float
- null
- undefined
- true
- false
- Object
- Array

##Variables and Scope

- begin with the "var" keyword followed by name then assigned using equal sign.

###"var" vs. "no var"

"var" keeps the scope local to the current scope.

This also works exactly like variables inside "do ... end" blocks in Ruby.

```
//main context

function context_a(){
  var x = 3;  //makes the variable local
  console.log(x);  //prints 3
}
context_a(); //call the function

console.log(x)
// undefined

```

no "var" makes the variable automatically global.  Be careful!  Is this really what you want to do?

```
//main context

function context_b(){
  x = 3;  //makes the variable global
  console.log(x);  //prints 3
}

console.log(x)
// undefined

```

This is somewhat different from Ruby, as creating a global variable by accident inside of a function block is not as easy.


##Functions

Like many things that are more nuanced and split into different classes in Ruby, a Function works like a Ruby method definition and a do ... end block at the same time.

###Defining functions.

When it comes to defining functions, you have several options in JavaScript and some may be handier and more common than others.

1. Anonymous (but unreferencable in this form)

```
function(parameter1,parameter2){
  //code  
  return some_value;
}
```
This is useful in a few contexts we'll discuss later.


2. Standard, named function but ambiguously scoped

```
function name_of_function(parameter1, parameter2) {
  
  //code goes here.
  return some_value;
}
```

3. Locally scoped

```
var name_of_function = function(parameter1, parameter2) {
  //code goes here.
  return some_value;
}
```
Note that this is the same as assigning an anonymous function to a local variable.  Now it can be referenced.

4. Anonymous, immediately called function
```
(function(parameter1,parameter2){
  //code goes here
  return some_value;
}(argument1,argument2));
```
Also useful in some contexts that we'll discuss later.


##Math Operators

###Basics

``+``, ``-``, ``*``, ``/`` are all available.

###i++ vs. ++i
The difference between i++ and ++i is the value of the expression.

The value i++ is the value of i before the increment. The value of ++i is the value of i after the increment.

##Collections
###Array
###Object

##Loops
###While
```
while (condition) {
  // stuff to do while condition holds true
  // update condition somehow
}
```
warning: this is really easy to loop infinately if you are not careful.

###For
```
for (var x = 0; i < 10; i += 1 ) {
  
}
```
###For..in
```
for (c in colors) { 
  console.log(colors[c]+colors[c]) 
}

```


