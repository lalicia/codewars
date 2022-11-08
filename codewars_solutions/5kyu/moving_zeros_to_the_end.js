// Description:
/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

// Solution:
function moveZeros(arr) {
  
    let zeroes = [];
    zeroes = arr.filter((item) => {
      if (item === 0) {
        return zeroes.push(item)
      }
    })
    //console.log(zeroes);
    
    let notZero = [];
    notZero = arr.filter((item) => {
      if (item !== 0) {
        return notZero.push(item)
      }
    })
    //console.log(notZero)
    
    return notZero.concat(zeroes);
  }

// Sample tests:
/* describe("Tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(
      moveZeros([1,2,0,1,0,1,0,3,0,1]),
      [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
    );

    assert.deepEqual(
      moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]),
      [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
    );

    assert.deepEqual(
      moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]),
      ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
    );

    assert.deepEqual(
      moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9]),
      ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
    );

    assert.deepEqual(
      moveZeros([0,1,null,2,false,1,0]),
      [1,null,2,false,1,0,0]
    );
  }); */