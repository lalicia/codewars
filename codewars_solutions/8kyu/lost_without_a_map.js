// Description:
/* Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

// Solution:
function maps(x){
    let doubledArray = x.map(n => n*2);
    return doubledArray;
  }

// Sample tests:
/* describe("Basic tests", ()=>{
  it("Fixed tests", () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
  }); */