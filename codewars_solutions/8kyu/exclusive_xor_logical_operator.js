// Description:
/* In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise. */

// Solution:
function xor(a, b) {
    if (a === true && b === true) {
      return false
    }
    
    if (a === true || b === true) {
      return true
    } else {
      return false
    }
  }

// Sample tests:
/* describe("Your 'xor' function/operator", () => {
  it("should work for the four basic cases described above", () => {
    Test.assertEquals(xor(false, false), false, "false xor false === false");
    Test.assertEquals(xor(true, false), true, "true xor false === true");
    Test.assertEquals(xor(false, true), true, "false xor true === true");
    Test.assertEquals(xor(true, true), false, "true xor true === false");
    Test.assertNotEquals(xor(true, true), true, "'xor' is NOT identical to 'or'");
  });
  it("should work properly when nested", () => {
    Test.assertEquals(xor(false, xor(false, false)), false);
    Test.assertEquals(xor(xor(true, false), false), true);
    Test.assertEquals(xor(xor(true, true), false), false);
    Test.assertEquals(xor(true, xor(true, true)), true);
    Test.assertEquals(xor(xor(false, false), xor(false, false)), false);
    Test.assertEquals(xor(xor(false, false), xor(false, true)), true);
    Test.assertEquals(xor(xor(true, false), xor(false, false)), true);
    Test.assertEquals(xor(xor(true, false), xor(true, false)), false);
    Test.assertEquals(xor(xor(true, true), xor(true, false)), true);
    Test.assertEquals(xor(xor(true, xor(true, true)), xor(xor(true, true), false)), true);
  });
  it("should work for random tests", () => {
    var a, b;
    for (let i = 0; i < 666; i++) {
      a = Test.randomNumber() > 50;
      b = Test.randomNumber() > 50;
      Test.assertEquals(xor(a, b), (a||b)&&!(a&&b));
    }
  });
}); */