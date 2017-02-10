// PROBLEM 12 (Explicit Binding)
// For this question, you are asked to make a function called 'callBinding'.
// This function will take in 3 parameters.
// (magicAnimals<Array>, updateAnimal<function>, id<number>)
// Find the animal with the matching id, then call the function
// with the context of the animal, and 'Trogdor' as a parameter.

// CODE HERE...
function callBinding(magicAnimals, updateAnimal, id) {
	for (var i = 0; i < magicAnimals.length; i++) {
		if (magicAnimals[i].id == id) {
			return updateAnimal.call(magicAnimals[i], 'Trogdor');
		}
	}
}



// PROBLEM 13 (Explicit Binding)
// For this question, you are asked to make a function called 'applyBinding'.
// This function will take in 3 parameters.
// (magicAnimals<Array>, updateAnimal<function>, id<number>)
// Find the animal with the matching id, then call the function
// with the context of the animal, and ['being majestic', 'eating rainbows'] as a parameter.

// CODE HERE...
function applyBinding(magicAnimals, updateAnimal, id) {
	for (var i = 0; i < magicAnimals.length; i++) {
		if (magicAnimals[i].id == id) {
			return updateAnimal.apply(magicAnimals[i], ['being majestic', 'eating rainbows']);
		}
	}
}



// PROBLEM 14 (Custom Promises) - $q is an injected library that works like the angular one
// For this question, you are asked to make a function called 'promiseMe'.
// This function will take in 1 parameter.
// ($q<Custom promise object>)
// Create a custom promise, then in a time out, update the variable foo (seen below)
// to 'bar' and complete your promise.

var foo;
// CODE HERE...
function promiseMe($q) {
	var defered = $q.defer();

	setTimeout(function() {
		foo = 'bar'
		defered.resolve(foo);
	}, 2000);

	return defered.promise;
}



// PROBLEM 15 (Custom Promises) - $http is a function created to simulate the angular $http.
// For this question, you are asked to make a function called 'emailList'.
// This function will take in 2 parameters.
// ($q<Custom promise object>, $http<Custom request function>)
// Set up your custom promise, Then make a request using $http.
// GET '/api/users'
// Make an array of emails from the returned data,
// and then pass the array as you complete your promise.

// CODE HERE...
function emailList($q, $http) {
	var defered = $q.defer();

	$http({
		method: 'GET',
		url: '/api/users'
	})
	.then(function(response) {
    var emails = []
    for (var i = 0; i < response.data.length; i++) {
      emails.push(response.data[i].email);
    }
		defered.resolve(emails);
	});

	return defered.promise;
}
