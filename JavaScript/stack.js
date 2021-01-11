// Implementing a Stack Data Structure
// Implementation is over the primitive Array Structural Type

// ES5

// Initialize an empty Array to hold elements in the stack
var letters = [];

// Random palindrome word we are checking
var word = "bob";
var rword = "";

// Put letters of word into a stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// Now we check if the word and reversed word match...
if (rword === word) {
  console.log(word + "is a palindrome)");
} else {
  console.log(word + "is not a palindrome");
}

// Again I was just using the built in Array methods to make a stack.