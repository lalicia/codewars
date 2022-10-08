// Description:
/* In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata. */

// Solution:
function testEven(n) {
    if (n%2 == 0) {
      return true;
    }
    else {
      return false;
    }
};

// Sample tests:
/* describe("Tests", () => {
  it("sampleTests", () => {
    assert.strictEqual(testEven(0), true, "testEven for 0");
    assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
    assert.strictEqual(testEven(1), false, "testEven for 1");
    assert.strictEqual(testEven(2), true, "testEven for 2");
    assert.strictEqual(testEven(-4), true, "testEven for 2");
    assert.strictEqual(testEven(15), false, "testEven for 15");
    assert.strictEqual(testEven(20), true, "testEven for 20");
    assert.strictEqual(testEven(220), true, "testEven for 220");
    assert.strictEqual(testEven(222222221), false, "testEven for 222222221");
    assert.strictEqual(testEven(500000000000), true, "testEven for 500000000000");
      }); */