// Description:
/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

// Solution:
var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears == 1) {
      return [1, 15, 15]
    }
    
    if (humanYears == 2) {
      return [2, 24, 24]
    }
    
    if (humanYears > 2) {
      let over2 = humanYears - 2;
      //console.log(over2)
      let catAge = 24 + (4 * over2);
      let dogAge = 24 + (5 * over2);
      return [humanYears, catAge, dogAge];
      
    }
  }

// Sample tests:
/* describe("Solution Tests", function() {

  it("one", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
  });

  it("two", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
  });

  it("ten", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
  });
 */