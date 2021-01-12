// Sets

// ES5

//Using a function declaration
function mySet() {
  // The collection Array will hold the set's elements
  var collection = [];
  // This method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  // This method will return all the values in the set
  // Different from ES6 SET.values which returns a Set Iterator
  this.values = function () {
    return collection;
  };
  // This method will add an element to the set
  // ES6
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // This method will remove an element from a set
  // Of course in ES6 Set .remove is .delete
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // This method will return the size of the collection
  this.size = function () {
    // We could call the length property since our collection
    // under the hood is an Array.
    return collection.length;
  };
  // Beyond ES6 Sets (Union, )
  // This method will return the union of two sets
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    // .add method will not insert any duplicate elements
    firstSet.forEach(function (element) {
      unionSet.add(element);
    });
    secondSet.forEach(function (element) {
      unionSet.add(element);
    });
    return unionSet;
  };
  // This method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (element) {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    // The return has all the elements from both sets
    return intersectionSet;
  };
  // This method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (element) {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  };
  // This method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    // .every
    // https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/every
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
