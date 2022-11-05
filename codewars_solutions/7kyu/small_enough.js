// Description:
/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

// Solution:
function smallEnough(a, limit){
    let result = a.filter((item) => {
      return item > limit
    })
    
    if (result.length > 0) {
      return false
    } else {
      return true
    }
  }
    
  // this was the first solution I came up with but by the end realsied I could probably cut out a lot of it - tested and passed above
  //   let result = a.map((item) => {
  //                if (item < limit || item == limit) {
  //                 return true
  //                   } else {
  //                   return false
  //                   }
  //                 }).filter((item) => {
  //                   return item === false})
    
  //   if (result.length > 0) {
  //     return false
  //   } else {
  //     return true;
  // }

// Sample tests:
/* describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
    assert.strictEqual(smallEnough([1,1, 1, 1, 1, 2], 1), false);
    assert.strictEqual(smallEnough([78, 33, 22, 44, 88, 9, 6], 87), false);
    assert.strictEqual(smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10), true);
    assert.strictEqual(smallEnough([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 12), true);
  })
}) */