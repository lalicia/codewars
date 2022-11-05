// Description:
/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length. */

// Solution:
function sortByLength (array) {
    return array.sort(function(a, b){
      // ASC: a.length - b.length
      // DESC: b.length - a.length
      return a.length - b.length;
    });
  };

// Sample tests:
/* describe("Basic tests",function(){
  it("Test 1",function(){
    Test.assertDeepEquals(sortByLength(["Dog", "Food", "A", "Of"]),["A", "Of", "Dog", "Food"]);
  });
  it("Test 2",function(){
    Test.assertDeepEquals(sortByLength(["", "Dictionary", "Eloquent", "Bees"]),["", "Bees", "Eloquent", "Dictionary"]);
  });
  it("Test 3",function(){
    Test.assertDeepEquals(sortByLength(["A longer sentence", "The longest sentence", "A short sentence"]),["A short sentence", "A longer sentence", "The longest sentence"]);
  });
}); */