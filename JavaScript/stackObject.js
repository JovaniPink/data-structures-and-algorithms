// ES5
var Stack = function () {
  this.size = 0;
  this.storage = {};

  // Adds a value onto the end of the Stack
  this.push = function (value) {
    this.storage[this.size] = value;
    this.size++;
  };

  // Removes and return the value at the end of the Stack
  this.pop = function () {
    if (this.size === 0) {
      return undefined;
    }

    this.size--;
    var result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  };

  this.size = function () {
    return this.size;
  };

  // Returns the value at the end of the Stack
  this.peek = function () {
    return this.storage[this.size - 1];
  };
};

// Create a stack with ES6 class
class StackClass {
  constructor() {
    this.size = 0;
    this.storage = {};

    // Adds a value onto the end of the Stack
    this.push = function (value) {
      this.storage[this.size] = value;
      this.size++;
    };

    // Removes and return the value at the end of the Stack
    this.pop = function () {
      if (this.size === 0) {
        return undefined;
      }

      this.size--;
      var result = this.storage[this.size];
      delete this.storage[this.size];
      return result;
    };

    this.size = function () {
      return this.size;
    };

    // Returns the value at the end of the Stack
    this.peek = function () {
      return this.storage[this.size - 1];
    };
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("JovaniPink");
console.log(myStack.size());
