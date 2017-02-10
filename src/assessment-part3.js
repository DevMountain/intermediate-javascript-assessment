// // Part 3:
// // Making custom promises
// // Call and apply
// 
// var foo;
// // 1. Custom Promise
// function promiseMe($q) {
// 	var defered = $q.defer();
// 
// 	setTimeout(function() {
// 		foo = 'bar'
// 		defered.resolve(foo);
// 	}, 2000);
// 
// 	return defered.promise;
// }
// 
// // 2. Custom Promise
// function middleMan($q, $http) {
// 	var defered = $q.defer();
// 
// 	$http({
// 			method: 'GET',
// 			url: '/api/request'
// 		})
// 		.then(function(response) {
// 			defered.resolve(response.data);
// 		});
// 
// 	return defered.promise;
// }
// 
// // 3.
// 
// // 4. Call
// 
// // 5. Apply
