// Description:
/* Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi" */

// Solution:
function digitize(n) {
  let array = n.toString().split("").reverse();
  return array.map((item) => Number(item));
}

// Sample tests:
/* function doTest(input, expected) {
  const actual = remove(input);
  strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

function solution(s) {
  return s.replace(/\!$/, "");
}

function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from);
}

function randLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[~~(letters.length * Math.random())];
} */