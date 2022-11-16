// Description:
/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

// Solution:
function removeUrlAnchor(url){
    let array = url.split("#");
    //console.log(array)
    return array[0];
  }

// Sample tests:
/* describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
  })

describe("Random tests", () => {  
  
    const protos = ["https://www.", "https://", "", "http://", "www.", "http://www."]
    const names  = ["spam", "egg", "bacon", "tea", "lobsterthermidor", "bakedbeans", "tomato", "toast", "sausage", "rat"]
    const toplds = [".com", ".org", ".edu", ".net", ".gov", ".int", ".mil"]
    const frags  = ["#fragment", "#tukada", "#fragman", "#thrafsma", "#porohita", "#fenduan", "#danpen", "#fragmentum",
              "#pasarte", "#shaziya", "#mieng", "#brochsteck", "", "", "", ""]
    
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } */