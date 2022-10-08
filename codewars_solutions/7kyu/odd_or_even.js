// Description:
/* Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

// Solution:
function oddOrEven(array) {
    //sum all elements in array
     let sum = 0;
     array.map((item) => sum += item);
     console.log(sum);
     
    //check if % 2 is 0 and return odd/even
     if (sum % 2 === 0) {
       return "even";
     } else {
       return "odd";
     }
 }

// Sample tests:
/* describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.strictEqual(oddOrEven([0]), 'even')
    assert.strictEqual(oddOrEven([1]), 'odd')
    assert.strictEqual(oddOrEven([]), 'even')
  }); */