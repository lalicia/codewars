// Description:
/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

// Solution:
function solution(str, ending) {
    if (str.endsWith(ending)) {
       return true
    } else {
        return false
  }}

// Sample tests:
/* describe("Tests", () => {
  it("test", () => {
function check(str, ending, expected){
  var result = solution(str, ending)
  Test.assertEquals(result, expected, "Expected solution('" + str + "', '" + ending + "') to return " + expected)
}

check("samurai", "ai", true)
check("sumo", "omo", false)
check("ninja", "ja", true)
check("sensei", "i", true)
check("samurai", "ra", false)
check("abc", "abcd", false)
});
}); */