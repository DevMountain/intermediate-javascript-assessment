// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 2

// *************
// * PROBLEM 1 *
// *************

// Below are two variables (firstUser and thirdUser).
// Under the variables is a function called noWeakLink.
// noWeakLink uses $http to make a "GET" request to /api/users.
// You must use two .then functions to handle the response object.
// Chain these functions off of $http (do not put them in variables)
// The response object will look like this :
/*
    {
      data: [
        {
      		email: "awilliams0@intel.com",
      		first_name: "Alan",
      		gender: "Male",
      		id: 1,
      		last_name: "Williams"
        },
        {
          //...
        }
      ]
    }
*/

// In the first .then function you use, assign the first user object (located in the response object)
// to the variable 'firstUser' (previously declared), then return the response object.

// In the second .then function you use, assign the third user object
// to the variable 'thirdUser' (previously declared) and then return the tenth user object.

var firstUser = 'don\'t touch this string!';
var thirdUser = 'don\'t touch this string, either!';

function noWeakLink() {

  return $http({
    method: 'GET',
    url: '/api/users'
  })
    // CODE HERE...
    .then((res) => {
      console.log(res)
      firstUser = res.data[0]
      console.log(firstUser);
      return res;
    })
    .then((res) => {
      console.log(res.data)
      thirdUser = res.data[2]
      console.log(thirdUser)
      return res.data[9];
    })
}


// *************
// * PROBLEM 2 *
// *************

// Below is a variable called elephant which has been assigned an
// object with a name.

// Function large currently returns the following:
// 'My name is ' + this.name + ' and I am very heavy!'

// You must use explicit binding.
// In a variable called boundToElephant,
// assign it the value of the large function BOUND to the elephant object.

// When boundToElephant gets called, it should return this exact string:
// 'My name is Horton and I am very heavy!' (The above instructions should make this work.  No code needed for this paragraph)

var elephant = {
  name: 'Horton'
}
function large() {

  return 'My name is ' + this.name + ' and I am very heavy!'
}
// CODE HERE...
var boundToElephant = large.bind(elephant);
console.log(boundToElephant)

// *************
// * PROBLEM 3 *
// *************

// Write a function called deathStar.
// deathStar will take in two parameters:
// capacity (Function) and crew (object).
// Use explicit binding to give capacity the context of crew
// and return the bound function.

// CODE HERE...
function deathStar(capacity, crew) {

  return capacity.bind(crew)
}


// *************
// * PROBLEM 4 *
// *************

// Create a function called accountingOffice.
// accountingOffice will take in a parameter:
// assets (Number),
// then return a closure function:
// The closure function will take in a parameter: liabilities (Number)
// The closure function will return the combined value of assets and liabilities.

// CODE HERE...
function accountingOffice(assets) {


  return function closure(liabilities) {
    return liabilities + assets
  }
}


// *************
// * PROBLEM 5 *
// *************

// Create a function called forgetter that takes in a parameter:
// name (String).

// forgetter helps keep track of things people don't want to forget.
// forgetter needs to return a function called rememberall.
// rememberall takes in a parameter:
// item (String).

// When rememberall is invoked, it will store the new item
// to be remembered along with all other previous items remembered.
// rememberall then needs to return an object with the following format:

// {
//     name: << name (given parameter) >>,
//     remember: << array of items to be remembered >>
// };

// CODE HERE...

function forgetter(name) {

  let thingsToRemember = []

  return function rememberall(item) {

    thingsToRemember.push(item)
    console.log(thingsToRemember)
    return obj = {
      name: name,
      remember: thingsToRemember
    }
  }
}


// *************
// * PROBLEM 6 *
// *************

// Create a function called frodo. frodo will take in two parameters:
// startingHungerValue (Number) and startingDangerValue (Number).
// frodo will need to store those values on internal variables.

// frodo will then return an object with two methods:
// The first method will be called dinnerOverFire.
// dinnerOverFire will decrease hunger by 25 and will increase danger by 40.

// The second method will be called hidingInBush.
// hidingInBush will increase hunger by 35 and decrease danger by 20.

// Both methods need to return an object structured like this:

// {
//   hunger: (modified hunger value),
//   danger: (modified danger value)
// }

// NOTE: Neither hunger nor danger should be able to exceed 100 or drop below 0.

// CODE HERE...
function frodo(startingHungerValue, startingDangerValue) {
  console.log("startingHungerValue", startingHungerValue, "startingDangerValue", startingDangerValue)
  
  let hunger = startingHungerValue;
  let danger = startingDangerValue;

  return {
      dinnerOverFire: function () {
        // console.log("dinnerOverFire pre changes:", "hunger:", hunger, "danger:", danger)
        // console.log(hunger - 25)
        hunger = (hunger - 25 <= 0) ? 0 : hunger -= 25;
        danger = (danger + 40 > 100) ? 100 : danger+= 40;
        // console.log("dinnerOverFire post changes:",  "hunger:", hunger, "danger:", danger)
        return {
          hunger: hunger,
          danger: danger
        }
      },
      hidingInBush: function () {
        console.log("hidingInBush pre changes:", "hunger:", hunger, "danger:", danger)
        hunger = (hunger + 35 > 100) ? 100 : hunger += 35;
        danger = (danger - 20 < 0) ? 0 : danger -= 20;
        console.log("hidingInBush post changes:", "hunger:", hunger, "danger:", danger)
        return {
          hunger: hunger,
          danger: danger
        }     
      }
  }
}

