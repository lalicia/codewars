// Description:
/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1) */

// Solution:
function solution(number){
    if (number <= 0) {
      return 0
    }
    
    let count = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        count += i;
      }
    }
  
    return count;
  }

// Sample tests:
/* function test(n, expected) {
  it(`n=${n}`, () => {  
    let actual = solution(n);
    assert.strictEqual(actual, expected)
  });
}

describe("basic tests", function(){
  test(10,23)
  test(20,78)
  test(200,9168)
})

describe("smallest cases", function() {
  test(-1,0)
  test(0,0)
  test(1,0)
  test(2,0)
  test(3,0)
  test(4,3)
  test(5,3)
  test(6,8)
})

describe("random cases", function() {
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function _solution(number){
    let sum = 0;
    
    for(let i = 1; i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }
  
  for(let i = 0; i < 100; i++) {
    let rand = randint(0, 10**randint(1, 5)) - 100
    test(rand, _solution(rand));
  }
}) */