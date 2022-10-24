// Description:
/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

// Solution:
function abbrevName(name){
  let array = name.toUpperCase().split(' ');
  return array[0][0] + "." + array[1][0]
}

// Sample tests:
/* describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");

    assert.strictEqual(abbrevName("george clooney"), "G.C");
    assert.strictEqual(abbrevName("marky mark"), "M.M");
    assert.strictEqual(abbrevName("eliza doolittle"), "E.D");
    assert.strictEqual(abbrevName("reese witherspoon"), "R.W");
  });
}); */