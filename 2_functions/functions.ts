// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// Return type annotation:
function greet(person: string = "stranger"): string {
   return `Hi there, ${person}!`;
 }
 
 function square(num: number): number {
   return num * num;
 }
 

square(3);
greet('test user');
doSomething("ChickenFace", 78, true);

// Arrow function:
const add = (x: number, y: number): number => {
   return x + y;
 };

// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

// Void
function printTwice(msg: string): void {
   console.log(msg);
   console.log(msg);
 }

// Never
function makeError(msg: string): never {
   throw new Error(msg);
 }
 
 function gameLoop(): never {
   while (true) {
     console.log("GAME LOOP RUNNING!");
   }
 }
 

 // **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

function twoFer(name: string = 'you'): string {
   return `one for ${name}, one for me`;
}

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

function isLeapYear(year: number): boolean {
   return ((year % 4 === 0 && year % 100 !== 0) || year % 100 === 0)
}

console.log(isLeapYear(2012));
console.log(isLeapYear(2013));