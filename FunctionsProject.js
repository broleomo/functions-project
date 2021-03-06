// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x,y){
if (x > y) {
  return x;
}
else if (y > x) {
  return y;
}
}
console.log (max(5,6));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a,b,c){
  if (a > b && a > c) {
  return a;
}
else if (b > c && b > a) {
  return b;
}
else if (c > a && c > b) {
  return c;
}
}
console.log (maxOfThree(8,10,5));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if ('a' || 'e' || 'i' || 'o' || 'u') {
      return true;
    }
    else {
      return false;
    }
}
console.log (isVowel('a'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(w,z){
  return(w + z);
}
console.log(sum(6,8));



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(d,e,f) {
  return((d + e + f) / 3);
}
console.log(avg(5,10,5));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(g) {
  return (g.length);
}

console.log(getLength('this is the length'));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(r,t) {
  if (t > r) {
    return true;
  }
  else {
    return false
  }
}
console.log(greaterThan(4,3));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(Name) {
  return ('Hello, ' + Name + '!');
}
console.log(greet('Gargi'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(Location,Person,Color,Animal) {
  return(Person + ' and her ' + Color + ' '+ Animal + ' went to ' + Location + '.');
}
console.log(madlib('Vegas','Celine Dion','pink','flamingo'));
