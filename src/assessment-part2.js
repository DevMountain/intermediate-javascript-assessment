// Chaining .thens
// Context - .bind
// Closures

//PROBLEM 1 (Chaining)

//Below are two variables (one and two). Under the variables is a function called noWeakLink. noWeakLink uses $http to make a "GET" request to /api/users. You must use two .then functions to handle the response.

//In the first .then function you use, assign the first user object to the variable 'one' (previously declared).

//In the second .then function you use, assign the third user object to the variable 'two' (previously declared) and then return the tenth user object.
var one = 'don\'t touch this string!';
var two = 'don\'t touch this string, either!';

  function noWeakLink() {

    return $http({
      method: 'GET',
      url: '/api/users'
    }) //Code here:

  }
//PROBLEM 2 (Context)

//Below is a vaiable called elephant which has been assigned the value of an object with one key/value pair.
// Function large currently returns the following:

// 'My name is ' + this.name + ' and I am very heavy!'

// You must use explicit binding. In the variable called boundToElephant, assign it the value of the large function BOUND to the elephant object.
// When boundToElephant gets called, it should return this exact string:

// 'My name is Horton and I am very heavy!'

var elephant = {
  name: 'Horton'
}
function large() {

  return 'My name is ' + this.name + ' and I am very heavy!'
}
// Code here:
var boundToElephant;





//PROBLEM 3 (Context)

//Write a function called deathStar. deathStar will take in two parameters, capacity (function) and crew (object). Use explicit binding to give capacity the context of crew.

//Code here:










//PROBLEM 4 (Closures)

//Create a function called accountingOffice. This function will take in a parameter called assets and return a function called accountant. accountant will take in a parameter called liabilities and return assets added to liabilities.

//Code here:












//PROBLEM 5 (Closures)

//Create a function called forgetter that takes in name as a parameter. forgetter helps keep track of things people don't want to forget.
//This function needs to return a function called rememberall. rememberall takes in a parameter called item (an item to be remembered). When rememberall is invoked, it will store the new item to be remembered along with all other previous items remembered.

//rememberall needs to return an object with the following format:
// {
//     name: << name of person, example: Neville >>,
//     remember: << array of items to be remembered >>
// };

//code here:














//PROBLEM 6 (Closures)

//Create a function called frodo. frodo will take in two parameters: startingHungerValue and startingDangerValue.

//frodo will have two local variables called hunger and danger. Assign those variables the corresponding values from the parameters.

//frodo will return an object with two methods. The first method will be called dinnerOverFire. dinnerOverFire will decrease hunger by 25 and will increase danger by 40.

//the second method will be called hidingInBush. hidingInBush will increase hunger by 35 and decrease danger by 20.

//Both methods need to return an object structured like this:
//{
//   hunger: << hunger value >>,
//   danger: << danger value >>
// }

//NOTE: Neither hunger nor danger should be able to exceed 100 or drop below 0.

//Code here:
