// Description:
/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

// Solution:
function XO(str) {
    str = str.toLowerCase();
    
    if (str === "") {
      return true
    }
    
    if (!str.includes("x") || !str.includes("o")) {
      return false
    }
    
    let xs = [];
    let os = [];
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "x") {
        xs.push(str[i])
      }
      if (str[i] === "o") {
        os.push(str[i])
      }
    }
    
    if (xs.length === os.length) {
      return true
    } else {
      return false
    }
  }

// Sample tests:
/* describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO('XO'),true);
Test.assertEquals(XO('xo0'),true);
Test.assertEquals(XO('xxxoo'),false);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO(''),true,'Empty string contains equal amount of x and o');
Test.assertEquals(XO('xxxxxoooxooo'),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("ooom"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("xxxxxxxooo"),false);
Test.assertEquals(XO('abcdefghijklmnopqrstuvwxyz'),true,'Alphabet contains equal amount of x and o');
  });
}); */