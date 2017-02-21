describe('Part 1:', function(){
  describe('fairyTale1', function() {
    it('should be an array', function() {
      expect(fairyTale1).toEqual(jasmine.any(Array));
    });
    it('should contain the correct function names', function() {
      var solArr1 = fairyTale1.map(function(e){return e = e.toLowerCase()})
      var correctSolution = false
      if(solArr1.length === 2 && solArr1.includes('mamabear') === true && solArr1.includes('papabear') === true){
        correctSolution = true;
      }
      expect(correctSolution).toBe(true);
    });
  });
  describe('fairyTale2', function() {
    it('should be an array', function() {
      expect(fairyTale2).toEqual(jasmine.any(Array));
    });
    it('should contain the correct function names', function() {
      var solArr2 = fairyTale2.map(function(e){return e = e.toLowerCase()})
      var correctSolution = false
      if(solArr2.length === 1 && solArr2[0] == 'goldilocks'){
        correctSolution = true;
      }
      expect(correctSolution).toBe(true);
    });
  });
  describe('fairyTale3', function() {
    it('should be an array', function() {
      expect(fairyTale3).toEqual(jasmine.any(Array));
    });
    it('should contain the correct function names', function() {
      var solArr3 = fairyTale3.map(function(e){return e = e.toLowerCase()})
      var correctSolution = false
      if(solArr3.length === 1 && solArr3[0] === 'mamabear'){
        correctSolution = true;
      }
      expect(correctSolution).toBe(true);
    });
  });
  describe('fairyTale4', function() {
    it('should be an array', function() {
      expect(fairyTale4).toEqual(jasmine.any(Array));
    });
    it('should contain the correct function names', function() {
      var solArr4 = fairyTale4.map(function(e){return e = e.toLowerCase()})
      var correctSolution = false
      if(solArr4.length === 4 && solArr4.includes('mamabear') === true && solArr4.includes('papabear') === true && solArr4.includes('goldilocks') === true && solArr4.includes('dabears') === true){
        correctSolution = true;
      }
      expect(correctSolution).toBe(true);
    });
  });
  describe('fairyTale5', function() {
    it('should be an array', function() {
      expect(fairyTale5).toEqual(jasmine.any(Array));
    });
    it('should contain the correct function names', function() {
      var solArr5 = fairyTale5.map(function(e){return e = e.toLowerCase()})
      var correctSolution = false
      if(solArr5.length === 4 && solArr5.includes('mamabear') === true && solArr5.includes('papabear') === true && solArr5.includes('babybear') === true && solArr5.includes('dabears') === true){
        correctSolution = true;
      }
      expect(correctSolution).toBe(true);
    });
  });

  describe('Vehicle', function(){
    it('should be a constructor function', function(){
      expect(new Vehicle).toEqual(jasmine.any(Object));
    })
    it('should have the correct property and value', function(){
      var lambo = new Vehicle()
      if(lambo.gasRemaining === 100){
        var propertyChecker = true;
      }
      expect(propertyChecker).toBe(true);
    })
  })
  describe('Prototype method "drive"', function(){
    it('should be a function', function(){
      var prototypeMethod = Vehicle.prototype.drive
      expect(prototypeMethod).toEqual(jasmine.any(Function));
    })
    it('should subtract the correct amount from gasRemaining', function(){
      var corvette = new Vehicle()
      corvette.drive()
      if(corvette.gasRemaining === 75){
        var methodWorkingFine = true
      }
      expect(methodWorkingFine).toBe(true);
    })
  })
  describe('mustang', function(){
    it('should be an object', function(){
      expect(mustang).toEqual(jasmine.any(Object));
    })
    it('should have a working drive method', function(){
      var gasInTank = mustang.gasRemaining
      mustang.drive()
      var couldDriveIt = false
      if(mustang.gasRemaining === gasInTank - 25){
        couldDriveIt = true
      }
      expect(couldDriveIt).toBe(true)
    })
    it('should have the right amount of gas', function(){
      var enoughgasRemaining = false
      if(mustang.gasRemaining === 25){
        enoughgasRemaining = true;
      }
      expect(enoughgasRemaining).toEqual(true)
    })
  })
  describe('charger', function(){
    it('should be an object', function(){
      expect(charger).toEqual(jasmine.any(Object));
    })
    it('should have a working drive method', function(){
      var gasInTank = charger.gasRemaining
      charger.drive()
      var couldDriveIt = false
      if(charger.gasRemaining === gasInTank - 25){
        couldDriveIt = true
      }
      expect(couldDriveIt).toBe(true)
    })
    it('should have the right amount of gas', function(){
      var enoughgasRemaining = false
      if(charger.gasRemaining === 50){
        enoughgasRemaining = true;
      }
      expect(enoughgasRemaining).toBe(true)
    })
  })

  describe("grammarPolice", function(){
    it("should be a method on the String prototype", function(){
      expect(String.prototype.grammarPolice).toEqual(jasmine.any(Function))
    })
    it("Should Return Strangely-Capitalized Strings That Offend The Internet", function(){
      var loudNoises = "THE VOLUME OF MY STRING IS TURNED TO ELEVEN".grammarPolice()
      var capString = true
      if(loudNoises === "The Volume Of My String Is Turned To Eleven"){
        capString = false;
      }
      expect(capString).toBe(false)
    })
    it("should function when passed in numbers and punctuation", function(){
      var numberTester = "t3StInG nUmB3Rs 777... !".grammarPolice()
      var formattedString = false
      if(numberTester === "T3sting Numb3rs 777... !"){
        formattedString = true
      }
      expect(formattedString).toBe(true)
    })
  })

  describe("valueType", function(){
    it("should be a function", function(){
      expect(valueType).toEqual(jasmine.any(Function))
    })
    it("should correctly recognize exact matches", function(){
      if(valueType(2, 2) === "Exactly the same"){
        var passExact = true;
      }
      expect(passExact).toBe(true)
    })
    it("should correctly recognize value matches", function(){
      if(valueType(5, "5") === "Same value, different types"){
        var passValue = true;
      }
      expect(passValue).toBe(true)
    })
    it("should correctly recognize value inequalities", function(){
      if(valueType(7, "Strawberry") === "Different values"){
        var passInequality = true;
      }
      expect(passInequality).toBe(true)
    })
  })

  describe("promiseCatcher", function(){
    it("should be a function", function(){
      expect(promiseCatcher).toEqual(jasmine.any(Function))
    })
    it("should not change the value of theAnswer before the promise is resolved", function(){
      expect(theAnswer).toEqual("Unknown")
    })
    it("should catch a promise, then set its value to 'theAnswer'", function(done){

      function deepThought ($q){
        var deferred = $q.defer();
        setTimeout(function(){
          var lifeUniverseEverything = 42
          deferred.resolve(lifeUniverseEverything)
        }, 200);
        return deferred.promise
      }

      promiseCatcher(deepThought($q))

        setTimeout(function(){
          var towel = false
          if(theAnswer === 42){
            towel = true
          }
          expect(towel).toBe(true)
          done()
        }, 500)

    })
  })
})
