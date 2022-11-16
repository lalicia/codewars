// Description:
/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */

// Solution:
String.prototype.toJadenCase = function () {
    let result = this;
  
    //split the string into each word
    if (this.length !== 0) {
      result = this.split(" ")
        .map((word) => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        })
        .join(" ");
    }
  
    return result;
  
  };

// Sample tests:
/* describe("Tests", () => {
  it("test", () => {
let quotes = [
  [
    "most trees are blue",
    "Most Trees Are Blue"
  ],
  [
    "How can mirrors be real if our eyes aren't real",
    "How Can Mirrors Be Real If Our Eyes Aren't Real"
  ],
  [
    "All the rules in this world were made by someone no smarter than you. So make your own.",
    "All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own."
  ],
  [
    "School is the tool to brainwash the youth.",
    "School Is The Tool To Brainwash The Youth."
  ],
  [
    "If newborn babies could speak they would be the most intelligent beings on planet Earth.",
    "If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth."
  ],
  [
    "If everybody in the world dropped out of school we would have a much more intelligent society.",
    "If Everybody In The World Dropped Out Of School We Would Have A Much More Intelligent Society."
  ],
  [
    "Trees are never sad look at them every once in awhile they're quite beautiful.",
    "Trees Are Never Sad Look At Them Every Once In Awhile They're Quite Beautiful."
  ],
  [
    "When I die. then you will realize",
    "When I Die. Then You Will Realize"
  ],
  [
    "I should just stop tweeting, the human conciousness must raise before I speak my juvenile philosophy.",
    "I Should Just Stop Tweeting, The Human Conciousness Must Raise Before I Speak My Juvenile Philosophy."
  ],
  [
    "Jonah Hill is a genius",
    "Jonah Hill Is A Genius"
  ],
  [
    "Dying is mainstream",
    "Dying Is Mainstream"
  ],
  [
    "If there is bread winners, there is bread losers. But you can't toast what isn't real.",
    "If There Is Bread Winners, There Is Bread Losers. But You Can't Toast What Isn't Real."
  ],
  [
    "You Can Discover Everything You Need to Know About Everything by Looking at your Hands",
    "You Can Discover Everything You Need To Know About Everything By Looking At Your Hands"
  ],
  [
    "Fixed habits to respond to authority takes 12 years. Have fun",
    "Fixed Habits To Respond To Authority Takes 12 Years. Have Fun"
  ],
  [
    "When you Live your Whole life In a Prison freedom Can be So dull.",
    "When You Live Your Whole Life In A Prison Freedom Can Be So Dull."
  ],
  [
    "Young Jaden: Here's the deal for every time out you give me, you'll give me 15 dollars for therapy when I get older.",
    "Young Jaden: Here's The Deal For Every Time Out You Give Me, You'll Give Me 15 Dollars For Therapy When I Get Older."
  ],
  [
    "The moment that truth is organized it becomes a lie.",
    "The Moment That Truth Is Organized It Becomes A Lie."
  ],
  [
    "Three men, six options, don't choose.",
    "Three Men, Six Options, Don't Choose."
  ],
  [
    "Water in the eyes and alcohol in the eyes are pretty much the same I know This from first Hand Experience.",
    "Water In The Eyes And Alcohol In The Eyes Are Pretty Much The Same I Know This From First Hand Experience."
  ]
]; */