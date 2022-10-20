// Description:
/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */

// Solution:
function alphabetPosition(text) {
    text = text.toLowerCase();
    let array = text.split("");
    
    let result = [];
    for (let i = 0; i < array.length; i++) {
      //must be array[i] - does not work array.i
      switch(array[i]) {
          case "a":
          result.push(1);
          break;
          case "b":
          result.push(2);
          break;
          case "c":
          result.push(3);
          break;
          case "d":
          result.push(4);
          break;
          case "e":
          result.push(5);
          break;
          case "f":
          result.push(6);
          break;
          case "g":
          result.push(7);
          break;
          case "h":
          result.push(8);
          break;
          case "i":
          result.push(9);
          break;
          case "j":
          result.push(10);
          break;
          case "k":
          result.push(11);
          break;
          case "l":
          result.push(12);
          break;
          case "m":
          result.push(13);
          break;
          case "n":
          result.push(14);
          break;
          case "o":
          result.push(15);
          break;
          case "p":
          result.push(16);
          break;
          case "q":
          result.push(17);
          break;
          case "r":
          result.push(18);
          break;
          case "s":
          result.push(19);
          break;
          case "t":
          result.push(20);
          break;
          case "u":
          result.push(21);
          break;
          case "v":
          result.push(22);
          break;
          case "w":
          result.push(23);
          break;
          case "x":
          result.push(24);
          break;
          case "y":
          result.push(25);
          break;
          case "z":
          result.push(26);
          break;
          default:
          break;
      }
    }
    result = result.join(" ")
    return result;
  }

// Sample tests:
/* function ap(text) {
  return text.toLowerCase().split('').filter(function(l) {
    return /[a-z]/.test(l);
  }).map(function(l) {
    return l.charCodeAt() - 96;
  }).join(' ');
}

function randomChar() {
  let chars = 'abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./\{}:|<>? ', rand  = Math.floor(Math.random() * chars.length);
  return chars[rand];
}

describe("Replace with alphabet position",()=>{
  it("Fixed tests:",()=>{
    for(let i = 65; i <= 122; i++) {
      let letter = String.fromCharCode(i);
      Test.assertEquals(alphabetPosition(letter), ap(letter));
    }
    Test.assertEquals( alphabetPosition("-.-'"), "" );
  });
});
  describe("Randomly generated tests:",()=>{
    for(let i = 0; i < 50; i++) {
      let x = "";
      for(let j= 0; j < 8; j++) {
        x += randomChar();
      }
      it(`Testing "${x}"`,()=>Test.assertEquals(alphabetPosition(x), ap(x)));
    }
  }); */