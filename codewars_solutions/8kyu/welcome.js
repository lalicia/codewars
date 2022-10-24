// Description:
/* Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied */

// Solution:
function greet(language) {
  let greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  
  //console.log(greetings.english)
  
  switch(language) {
      case "english":
      return greetings.english
      break;
      case "czech":
      return greetings.czech
      break;
      case "danish":
      return greetings.danish
      break;
      case "dutch":
      return greetings.dutch
      break;
      case "estonian":
      return greetings.estonian
      break;
      case "finnish":
      return greetings.finnish
      break;
      case "flemish":
      return greetings.flemish
      break;
      case "french":
      return greetings.french
      break;
      case "german":
      return greetings.german
      break;
      case "irish":
      return greetings.irish
      break;
      case "italian":
      return greetings.italian
      break;
      case "latvian":
      return greetings.latvian
      break;
      case "lithuanian":
      return greetings.lithuanian
      break;
      case "polish":
      return greetings.polish
      break;
      case "spanish":
      return greetings.spanish
      break;
      case "swedish":
      return greetings.swedish
      break;
      case "welsh":
      return greetings.welsh
      break;
      default:
      return "Welcome"
      break;
  }

}

//NB it should be:
function greet(language) {
    let greetings = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    }
    
    return greetings[language] || "Welcome";
  }

// Sample tests:
/* describe("Tests", () => {
  it("test", () => {
Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again."); */