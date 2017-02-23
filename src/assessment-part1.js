// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 1

// *************
// * PROBLEM 1 *
// *************

// Given the following nested functions:

function daBears(){
  var isFurry = true;

  function papaBear (){
    var porridge = "Too Hot!";
    var chair = "Too Big!";
    var bed = "Too Hard!";
    var feeling = "Angry";

    function mamaBear(){
      var porridge = "Too Cold!";
      var bed = "Too Soft!";

      function babyBear(){
        var porridge = "Just right!";
        var chair = "Just right!";
        var bed = "Just right!";
        var feeling = "Whiny";
        var sleepy = "Very yes";
      }
    }
  }

  function goldilocks(){
    var feeling = "Hungry";
    var isFurry = false;
    var isDinner = true;
  }
}

// Remove entries from the following arrays until only correct answers remain.
// A correct answer will be an array of strings that are function names.

// Which function(s) access the "chair" variable and get "Too Big!"
// (Delete wrong answers, leave correct ones)

var fairyTale1 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];

// Which function(s) access the "feeling" variable and get "Hungry"
// (Delete wrong answers, leave correct ones)

var fairyTale2 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];

// Which function(s) access the "porridge" variable and get "Too Cold!"
// (Delete wrong answers, leave correct ones)

var fairyTale3 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];

// Which function(s) access the "sleepy" variable and get undefined
// (Delete wrong answers, leave correct ones)

var fairyTale4 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];

// Which function(s) access the isFurry variable and get true
// (Delete wrong answers, leave correct ones)

var fairyTale5 = ["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];


// *************
// * PROBLEM 2 *
// *************

// Write a constructor function called Vehicle.  Vehicle should have a property
// called gasRemaining that is equal to 100.

// Next, assign a function called drive to the Vehicle prototype.  When invoked,
// drive should subtract 25 from the gasRemaining property of any Vehicle your constructor
// function creates.

// Create 2 new Vehicles with the constructor function you made: one called "charger",
// the other called "mustang".  Using implicit context, invoke the drive method on
// "charger" once, and invoke it twice on "mustang".

// CODE HERE...





// -----------------------------------------------------------------------------

// *************
// * PROBLEM 3 *
// *************


// For this problem, you will need to add a method to the String prototype named
// "grammarPolice".  When called on a string, "grammarPolice" will return a new string
//  where the first letter of every word is capitalized, while reverting the remainder
// of each word to lowercase.

// For example: "OH HELLO THERE" becomes "Oh Hello There"

// Your method may be passed punctuation, numbers or other non-letter characters
// and should neither modify them nor break when encountering them.




// CODE HERE...



// *************
// * PROBLEM 4 *
// *************

// Write a function called valueType that has two parameters. Jasmine will pass
// arguments into your function through the parameters.  Your function will need
// to compare the passed-in values and return a string based on that comparison, as follows:

// If the arguments are of the same type and have the same value, return "Exactly the same"

// If the arguments have the same value but are of different types, return "Same value, different types"

// In all other cases, return "Different values"

// CODE HERE...



// *************
// * PROBLEM 5 *
// *************

// Write a function called "promiseCatcher" with a single parameter.
// Jasmine will pass a promise into your function through that parameter.
// Your function will need to handle that promise.
// When your promise receives its results, set variable 'theAnswer' (seen below) equal to the result.

var theAnswer = "Unknown";

// CODE HERE...
