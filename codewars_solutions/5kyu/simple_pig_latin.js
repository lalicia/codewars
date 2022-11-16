// Description:
/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

// Solution:
function pigIt(str){
    let array = str.split(" ");
    
    //push all first chars of array elements into ays
    //delete first char from each element of array
    let ays = [];
    for (let i = 0; i < array.length; i++) {
      ays.push(array[i].charAt(0));
      array[i] = array[i].substr(1);
    }
    
    //if index of ays isn't punctuation (! or ?) add "ay" to it
    for (let i = 0; i < ays.length; i++) {
      if (ays[i] !== "!" && ays[i] !== "?") {
        ays[i] += "ay"
      }
    }
    
    //add the corresponding elements of array and ays
    for (let i = 0; i < array.length; i++) {
      array[i] += ays[i]
    }
  
    return array.join(" ")
    
  }

// Sample tests:
/* describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay');

let base = [
  ['Acta est fabula', 'ctaAay steay abulafay'],
  ['Barba non facit philosophum', 'arbaBay onnay acitfay hilosophumpay'],
  ['Cucullus non facit monachum', 'ucullusCay onnay acitfay onachummay'],
  ['Dura lex sed lex', 'uraDay exlay edsay exlay'],
  ['Errare humanum est', 'rrareEay umanumhay steay'],
  ['Fluctuat nec mergitur', 'luctuatFay ecnay ergiturmay'],
  ['Gutta cavat lapidem', 'uttaGay avatcay apidemlay'],
  ['Hic et nunc', 'icHay teay uncnay'],
  ['In vino veritas', 'nIay inovay eritasvay'],
  ['Lux in tenebris lucet', 'uxLay niay enebristay ucetlay'],
  ['Morituri nolumus mori', 'orituriMay olumusnay orimay'],
  ['Nunc est bibendum', 'uncNay steay ibendumbay'],
  ['O tempora o mores !', 'Oay emporatay oay oresmay !'],
  ['Panem et circenses', 'anemPay teay ircensescay'],
  ['Quis custodiet ipsos custodes ?', 'uisQay ustodietcay psosiay ustodescay ?'],
  ['Requiescat in pace', 'equiescatRay niay acepay'],
  ['Sic transit gloria mundi', 'icSay ransittay loriagay undimay'],
  ['Timeo Danaos et dona ferentes', 'imeoTay anaosDay teay onaday erentesfay'],
  ['Ultima necat', 'ltimaUay ecatnay'],
  ['Veni vidi vici', 'eniVay idivay icivay']
];

Test.randomize(base);
for (let [input, expected] of base)
  Test.assertEquals(pigIt(input), expected);
  });
}); */