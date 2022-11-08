// Description:
/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test" */

// Solution:
function spinWords(string){
  
    let array = string.split(" ");
    //console.log(array)
    
    array = array.map((item) => {
        if(item.length >=5) {
          return item.split("").reverse().join("")
        } else {
          return item
        }
      })
    
    return array.join(" ")
    
  }

// Sample tests:
/*   it("Fixed tests",()=>{ 
    dotest("Welcome",                              "emocleW"                             );
    dotest("Hey fellow warriors",                  "Hey wollef sroirraw"                 );
    dotest("This is a test",                       "This is a test"                      );
    dotest("This is another test",                 "This is rehtona test"                );
    dotest("This sentence is a sentence",          "This ecnetnes is a ecnetnes"         );
    dotest("You are almost to the last test",      "You are tsomla to the last test"     );
    dotest("Just kidding there is still one more", "Just gniddik ereht is llits one more");
    dotest("Seriously this is the last one",       "ylsuoireS this is the last one"      );
  }); */