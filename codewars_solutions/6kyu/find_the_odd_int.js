// Description:
/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

// Solution:
function findOdd(A) {

    let count = 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A.length; j++) {
        if (A[i] == A[j]){
          count++;
        }
      }
      if (count % 2 != 0 ){
        return A[i];
      }
    }
  };

// Sample tests:
/* function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});
describe('Random tests', function() {
  var i, sz, a, j, n;
  for(i = 0; i < 40; ++i) {
    sz = Math.round(Math.random()*1000+50);
    if (!sz%2) {
      ++sz;
    }
    a = [];
    for(j = 0; j < sz - 1; j+=2) {
      n = Math.round(Math.random()*1000);
      a.push(n);
      a.push(n);
    }
    n = Math.round(Math.random()*1000);
    a.push(n);
    Test.assertEquals(findOdd(a), n);
  }
}); */