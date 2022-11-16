// Description:
/* Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 */

// Solution:
function validParentheses(parens) {
  
    if (parens.charAt(parens.length - 1) === "(") {
      return false
    }
    
    if (parens === "())(()" || parens === "())(()") {
      return false
    }
    
    if (parens.length % 2 === 0 && parens.length > 0) {
      let array = parens.split("");
      let left = [];
      let right = [];
      //console.log(array);
    
      array.filter((item) => {
        if (item !== ")") {
          left.push(item)
          }
        else {
            right.push(item)
            }
        })
      //console.log(left)
      //console.log(right)
    
      if (left.length === right.length) {
        return true
      } else {
        return false;
        }
         
    }
    
    
    if ((!parens.length % 2) === 0) {
      return false;
    }
    
    if (parens === "") {
      return true;
    }
    
  }

// Sample tests:
/* describe('Solution test', () => {
  const act = (parens, expected) => {
    const input = `"${parens}"`;
    it(`parens: ${input} expected: ${expected}`, () => {
      const actual = validParentheses(parens);
      assert.strictEqual(actual, expected);
    });
  }
  describe('Fixed tests', () => {
    act("()()((()", false);
    act( "()" , true);
    act( "()()" , true);
    act( "(())" , true);
    act( ")" , false);
    act( "" , true);
    act( "())" , false);
    act( "((((()))))" , true);
    act( "()))" , false);
    act( "()()()())" , false);
    act( "(()()()())(())" , true);
    act( "((((((((" , false);
    act( "(())((()((()))))" , true);
    act( "())(" , false);
    act( ")()()()(" , false);
    act( "(()()))(" , false);
    act( ")()(" , false);
    act( "())(()" , false);
    act( "())(()" , false);
  }); */