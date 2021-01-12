// Stack
// First in, last out (FILO)

// Implementing a Stack Data Structure
// Implementation is over the primitive Array Structural Type

// ES6

// No real way to re-implement this stack usage in ES6 since I wanted to
// do both show the stack structure and solve for a palindrome.
// But solving the palindrome in ES6 is below...

// Initialize an empty Array to hold elements in the stack
let letters = [];

// Random palindrome word we are checking
let word = "bob";
let rword = word.split("").reverse();

// Put letters of word into a stack
// for (var i = 0; i < word.length; i++) {
//   letters.push(word[i]);
// }

// Pop off the stack in reverse order
// for (var i = 0; i < word.length; i++) {
//   rword += letters.pop();
// }

// Now we check if the word and reversed word match...
// if (JSON.stringify(rword) === JSON.stringify(word)) {
//   console.log(word + "is a palindrome)");
// } else {
//   console.log(word + "is not a palindrome");
// }

JSON.stringify(rword) === JSON.stringify(word.split(""))
  ? console.log(strWord + " is a palindrome")
  : console.log(strWord + " is not a palindrome");

// This is really poorly coded. Sorry.
