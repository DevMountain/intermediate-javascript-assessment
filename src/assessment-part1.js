// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 1

// **
// PROBLEM 1
// **

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

//["daBears", "papaBear", "mamaBear", "babyBear", "goldilocks"];

// Remove entries from the following arrays until only correct answers remain. 
// A correct answer will be an array of strings that are function names.

// Which function(s) access the "chair" variable and get "Too Big!" 
// (Delete wrong answers, leave correct ones)

var fairyTale1 = ["papaBear", "mamaBear"];

// Which function(s) access the "feeling" variable and get "Hungry" 
// (Delete wrong answers, leave correct ones)

var fairyTale2 = ["goldilocks"];

// Which function(s) access the "porridge" variable and get "Too Cold!" 
// (Delete wrong answers, leave correct ones)

var fairyTale3 = ["mamaBear"];

// Which functions access the "sleepy" variable and get undefined 
// (Delete wrong answers, leave correct ones)

var fairyTale4 = ["daBears", "papaBear", "mamaBear", "goldilocks"];

// Which functions access the isFurry variable and get true 
// (Delete wrong answers, leave correct ones)

var fairyTale5 = ["daBears", "papaBear", "mamaBear", "babyBear"];

// -----------------------------------------------------------------------------

// **
// PROBLEM 2
// **

// Write a constructor function called Vehicle.  Vehicle should have a single property called gasLeft that is equal to 100.  

// Next, assign a function called drive to the Vehicle prototype.  When invoked, drive should subtract 25 from the gasLeft property of any Vehicle your constructor function creates.

// Create 2 new Vehicles with the constructor function you made: one called "charger", the other called "mustang".  Using implicit context, invoke the drive method on "charger" once, and invoke it twice on "mustang".

// Code here

function Vehicle(){
  this.gasLeft = 100;
}

Vehicle.prototype.drive = function(){
  this.gasLeft -= 25;
}

console.log(Vehicle)
console.log(Vehicle.prototype)

var mustang = new Vehicle();

console.log(mustang)

mustang.drive()

console.log(mustang)

var charger = new Vehicle();
charger.drive()
mustang.drive()

// -----------------------------------------------------------------------------

// **
// PROBLEM 3
// **
// Prototypes
// #8  ###################
// # Prototype 1
// Add a prototype function to the Array type that doubles the value of every item in the array and returns the modified array.

// -----------------------------------------------------------------------------

// **
// PROBLEM 4
// **
// TYPE CHECKING
// #12  ###################
// # Type checking
// Write a function called compareValues that takes in 2 parameters.
// If both parameters are the same type and the same value return "Exact match".
// If both parameters have the same value but are different types return "Different types".
// Otherwise return "Different values".

// Type checking
// -----------------------------------------------------------------------------

// **
// PROBLEM 5
// **
// THIS CHAINING

// Using an existing promise (were checking for use of .then and a callback)
