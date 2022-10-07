// Description:
/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

// Solution:
function findAverage(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      }
    
    
    if (sum == 0) {
      return 0;
    } else {
      return sum / array.length;
    }
  }

// Sample tests:
/* describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findAverage([1,1,1]), 1);
    assert.strictEqual(findAverage([1,2,3]), 2);
    assert.strictEqual(findAverage([1,2,3,4]), 2.5);
  });
});   */