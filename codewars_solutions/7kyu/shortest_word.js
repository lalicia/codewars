//Description:
/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

// Solution: 
function findShort(s){
    let array = s.split(" ");
    //console.log(array);
    array.sort((a,b) => a.length - b.length);
    //console.log(array);
    return array[0].length;
  }

// Sample tests:
/* describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
    assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
    assert.strictEqual(findShort("lets talk about javascript the best language"), 3); 
    assert.strictEqual(findShort("i want to travel the world writing code one day"), 1); 
    assert.strictEqual(findShort("Lets all go on holiday somewhere very cold"), 2); 
    assert.strictEqual(findShort("Test where final word shortest see"), 3); 
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  })
}) */