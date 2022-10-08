// Description:
/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]*/

// Solution:
function countSmileys(arr) {
    let good = [];
    //check arr contains only valid characters, split into groups as needs one of each, but middle is optional
    let faceRegex= /[;:][~-]?[)D]/
    
    //check each item in array against regex, push to array if meets criteria for face
    arr.map((item) => {
      if (faceRegex.test(item) === true) {
      good.push(item);
      }
    })
    //console.log(good);
    
    return good.length;
  }

// Sample tests:
/* describe("Basic testing", function() {
  it("", () => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
    Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
    Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
}); */