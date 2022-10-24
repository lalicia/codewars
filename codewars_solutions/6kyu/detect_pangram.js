// Description: 
/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

// Solution:
function isPangram(string){
  if (string.length < 26) {
    return false
  }
  
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
               "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  let letters = [];
  
  for(let i = 0; i < alpha.length; i++) {
    if (string.toLowerCase().includes(alpha[i])) {
      letters.push(alpha[i])
    }
   
  }
  
  letters = letters.sort();
  letters = letters.join("").toLowerCase();
  //console.log(letters)
  
  if (letters === "abcdefghijklmnopqrstuvwxyz") {
    return true
  } else {
    return false
  }
  
}

// Sample tests:
/* var pangram = "The quick brown fox jumps over the lazy dog."
describe("Example Tests", function() {

  it("Is 'The quick brown fox jumps over the lazy dog.' a pangram?", function() {
    assert.strictEqual(isPangram(pangram), true)
  })
})  

describe( "Some tests in random order:", function(){
  var pangrams = [ 
  // not pangrams:
    [ 
      "This isn't a pangram!",
      "abcdefghijklmopqrstuvwxyz ",
      "aaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Detect Pangram",
      "A pangram is a sentence that contains every single letter of the alphabet at least once."
    ],
  
  // pangrams:
    [
      "Cwm fjord bank glyphs vext quiz",
      "Pack my box with five dozen liquor jugs.",
      "How quickly daft jumping zebras vex.",
      "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ",
      "AbCdEfGhIjKlM zYxWvUtSrQpOn"
    ]
  ]
  
  var order = [0,1,2,3,4,5,6,7,8,9].sort(function(){return Math.random()>.5})
  order.forEach(
    function(o){
      var exp = (o>4), o = o%5, str = pangrams[+exp][o];
      var missing = "abcdefghijklmnopqrstuvwxyz".split('').filter(function(c){return str.toLowerCase().indexOf(c)<0 })
      it("Is '"+str+"' a pangram?", function() {
        assert.strictEqual( isPangram( str ), exp, str+" is "+["not ",""][+exp]+"a pangram"+ (missing.length ? " ("+missing+" missing)" : "") )
      })  
    }
  )

}) */