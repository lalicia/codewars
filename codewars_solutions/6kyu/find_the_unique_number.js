// Description:
/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

// Solution:
function findUniq(arr) {
    if (arr[0] != arr[1]  && arr[0] != arr[2]) return arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[i-1]) return arr[i];
    }
  }

// Sample tests:
/* describe("Fixed Tests", () => {
  it ("Basic tests ", () => {
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]),2);
    assert.strictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]),0.55);  
    assert.strictEqual(findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ]),3);
    assert.strictEqual(findUniq([ 5, 5, 5, 5, 4, 5, 5, 5 ]),4);
    assert.strictEqual(findUniq([ 6, 6, 6, 6, 6, 5, 6, 6 ]),5);
    assert.strictEqual(findUniq([ 7, 7, 7, 7, 7, 7, 6, 7 ]),6);
  }) */