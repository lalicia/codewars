// Description:
/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

// Solution:
function fakeBin(x){
  let arr = x.split("");
  //console.log(arr)
 
  let numArr = arr.map((item) => {
    return Number(item)
    })
  //console.log(numArr)
  
  numArr = numArr.map((item) => {
    if (item < 5) {
      return item = '0';
    } else {
      return item = '1'
    }
  })
  //console.log(numArr)
  numArr = numArr.join("");
  return numArr;
}

// Sample tests:
/* describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
    assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
    assert.strictEqual(fakeBin('15889923'), '01111100'); 
    assert.strictEqual(fakeBin('800857237867'), '100111001111'); 
  })
}) */