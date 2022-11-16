// Description:
/* NB. I struggled with this for hours at the middle of bootcamp and managed to fix it in 5 minutes or so even with looking up while loops (as haven't used them in a while) so was really happy with this! :)
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

// Solution:
var countSheep = function (num){
    if (num === 0) {
      return "";
    }
    
    let result = "";
    let count = 0;
    
    while (num >= 1) {
      count++;
      result += count + " sheep...";
      num--;
    }
    return result;
  }

// Sample tests:
/* describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
}); */