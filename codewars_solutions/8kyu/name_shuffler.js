// Description:
/* Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john" */

// Solution:
function nameShuffler(str){
    str = str.split(" ");
    //console.log(str)
    str = str.reverse();
    //console.log(str)
    return str.join(" ");
  }

// Sample tests:
/* if (typeof(nameShuffler) != 'function') {
  if (typeof(nameSuffler) === 'function') nameShuffler = nameSuffler;
  if (typeof(nameShuffle) === 'function') nameShuffler = nameShuffle;
  if (typeof(nameSuffle)  === 'function') nameShuffler = nameSuffle;
}
describe("Basic tests",function(){
  assert.strictEqual(nameShuffler('john McClane'),'McClane john');
  assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary');
  assert.strictEqual(nameShuffler('tom jerry'),'jerry tom');
  assert.strictEqual(nameShuffler('Mary Jane'),'Jane Mary');
  assert.strictEqual(nameShuffler('John Doe'),'Doe John');
  assert.strictEqual(nameShuffler('William O\'Brien'),'O\'Brien William');
  assert.strictEqual(nameShuffler('George Huffingquane-McGafferty'),'Huffingquane-McGafferty George');
}) */