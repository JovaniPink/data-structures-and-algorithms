// Queues
// First In, first out (FIFO)

function Queue() {
  // Starting off with the primitive data structure Array
  collection = [];
  // Helper function to return the collection
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  // This method using .shift() removes the first item from collection
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
