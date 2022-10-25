// Description:
/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

// Solution:
function digitize(n) {
  let array = n.toString().split("").reverse();
  return array.map((item) => Number(item));
}

// Sample tests:
/* describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
    assert.deepEqual(digitize(23582357),[7,5,3,2,8,5,3,2]);
    assert.deepEqual(digitize(984764738),[8,3,7,4,6,7,4,8,9]);
    assert.deepEqual(digitize(45762893920),[0,2,9,3,9,8,2,6,7,5,4]);
    assert.deepEqual(digitize(548702838394),[4,9,3,8,3,8,2,0,7,8,4,5]);
  })
}) */