// // function greatGrandpa () {
// //   var dentures = 'killer smile';
// //
// //   function grandma() {
// //     var walkingStick = 'can\'t slow me down';
// //
// //     function dad() {
// //       var dentures = 'no thanks';
// //
// //       function daughter() {
// //         var havingFun = 'always';
// //
// //       }
// //     }
// //     function uncleBob() {
// //       var sportsCar = 'something slower than it looks';
// //     }
// //   }
// // }
//
// //which function(s) access the dentures variable and get 'killer smile'?
// var scopeArr1 = ['greatGrandpa', 'grandma', 'uncleBob'];
//
// var scopeArr2 = ['greatGrandpa', 'grandma', 'dad', 'uncleBob', 'daughter'];
//
// var scopeArr3 = ['greatGrandpa', 'grandma', 'dad', 'uncleBob', 'daughter'];
//
// var scopeArr4 = ['greatGrandpa', 'grandma', 'dad', 'uncleBob', 'daughter'];
//
// var scopeArr5 = ['greatGrandpa', 'grandma', 'dad', 'uncleBob', 'daughter'];
//
//
// // #2  ###################
// // # Promises
// var foo;
// /* Write a function called async.
//   Use $q to create a promise object and return the promise.
//   Call setTimeout on a function which sets the variable foo (above) to 'bar' and then resolve the promise when setTimeout completes.
// */
// function async() {
//   var deferred = $q.defer();
//   setTimeout(function(){
//     foo = 'hello';
//     deferred.resolve(foo)
//   }, 5000)
//   return deferred.promise;
// }
