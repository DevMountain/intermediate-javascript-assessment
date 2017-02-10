// Chaining .thens
// Context - .bind
// Closures

//PROBLEM 1 (Chaining)

//Below are two variables (one and two). Under the variables is a function called noWeakLink. noWeakLink
var one = 'don\'t change this string!';
var two = 'don\'t change this string, either!';

  function noWeakLink() {

    return $http({
      method: 'GET',
      url: '/api/one-then/two-then'
    }) //Code here:
    .then(function(res){
      console.log(res);
      one = res[0];
      return res;
    }).then(function(res) {
      two = res[2];
      return res[9];
    })
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

//PROBLEM 4 (Closures)

//Create a function called accountingOffice. This function will take in a parameter called assets and return a function called accountant. accountant will take in a parameter called liabilities and return assets added to liabilities.

//Code here:
function accountingOffice(assets) {
  return function accountant(liabilities) {
    return assets + liabilities;
  }
}


//PROBLEM 5 (Closures)

//Create a function called forgetter that takes in a person's name as a parameter. forgetter helps keep track of things people don't want to forget.
//This function needs to return a function called rememberall. rememberall takes in a parameter (an item to be remembered). When rememberall is invoked, it will store the new item to be remembered along with all other previous items.
//rememberall needs to return an object with the following format:
// {
//     name: << name of person, ex. Neville >>,
//     remember: << array of items to be remembered >>
// };

//coder here:
function forgetter(name) {
  var itemsToRemember = []
  return function rememberall(item) {
    itemsToRemember.push(item);
    return {
      name: name,
      remember: itemsToRemember
    };
  }
}

//PROBLEM 6 (Closures)

//Create a function called frodo. frodo will take in two parameters: startingHungerValue and startingDangerValue.

//frodo will have two local variables called hunger and danger. Assign those variables values from the parameters.

//frodo will return an object with two methods. The first method will be called dinnerOverFire. dinnerOverFire will decrease hunger by 25 and will increase danger by 40.

//the second method will be called hidingInBush. hidingInBush will increase hunger by 35 and decrease danger by 20.

//Both methods need to return an object structured like this:
//{
//   hunger: << hunger value >>,
//   danger: << danger value >>
// }

//NOTE: Neither hunger nor danger should be able to exceed 100 or drop below 0.

//Code here:

function frodo(startingHungerValue, startingDangerValue) {
  var hunger = startingHungerValue;
  var danger = startingDangerValue;
  return {
    dinnerOverFire: function() {
        hunger = hunger - 25;
        danger = danger + 40;
        if(hunger < 0) hunger = 0;
        if(danger > 100) danger = 100;
        console.log('h',hunger,'d', danger);
        return {
          hunger: hunger,
          danger: danger
        }
    },
    hidingInBush: function() {
        hunger = hunger + 35;
        danger = danger - 20;
        if (hunger > 100) hunger = 100;
        if (danger < 0) danger = 0;
        console.log('h',hunger,'d', danger);
        return {
          hunger: hunger,
          danger: danger
        }
    }
  }
}
