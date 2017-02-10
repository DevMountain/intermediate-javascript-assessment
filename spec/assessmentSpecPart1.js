describe('Problem 1:', function() {
  describe('fairyTale1', function() {
    it('should be an array', function() {
      expect(fairyTale1).toEqual(jasmine.any(Array));
    });
    it('should contain the correct function names', function() {
      var solArr1 = fairyTale1.map(function(e){return e = e.toLowerCase()})
      var correctSolution = false
      if(solArr1.length == 2 && solArr1.includes('mamabear') === true && solArr1.includes('papabear') === true){
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
      if(solArr2.length == 1 && solArr2[0] == 'goldilocks'){
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
      if(solArr3.length == 1 && solArr3[0] == 'mamabear'){
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
      if(solArr4.length == 4 && solArr4.includes('mamabear') === true && solArr4.includes('papabear') === true && solArr4.includes('goldilocks') === true && solArr4.includes('dabears') === true){
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
      if(solArr5.length == 4 && solArr5.includes('mamabear') === true && solArr5.includes('papabear') === true && solArr5.includes('babybear') === true && solArr5.includes('dabears') === true){
        correctSolution = true;
      }
      expect(correctSolution).toBe(true);
    });
  });
});

describe('Problem 2:', function(){
  describe('Vehicle', function(){
    it('should be a constructor function', function(){
      expect(new Vehicle).toEqual(jasmine.any(Object));
    })
    it('should have the correct property and value', function(){
      var lambo = new Vehicle()
      if(lambo.gasLeft === 100){
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
    it('should subtract the correct amount from gasLeft', function(){
      var corvette = new Vehicle()
      corvette.drive()
      if(corvette.gasLeft === 75){
        var methodWorkingFine = true
      }
      expect(methodWorkingFine).toBe(true);
    })
  })
  describe('Mustang', function(){
    it('should be an object', function(){
      expect(mustang).toEqual(jasmine.any(Object));
    })
    it('should have a working drive method', function(){
      var gasInTank = mustang.gasLeft
      mustang.drive()
      var couldDriveIt = false
      if(mustang.gasLeft == gasInTank - 25){
        couldDriveIt = true
      }
      expect(couldDriveIt).toBe(true)
    })
    it('should have the right amount of gas', function(){
      var enoughGasLeft = false
      if(mustang.gasLeft === 25){
        enoughGasLeft = true;
      }
      expect(enoughGasLeft).toEqual(true)
    })
  })
  describe('Charger', function(){
    it('should be an object', function(){
      expect(charger).toEqual(jasmine.any(Object));
    })
    it('should have a working drive method', function(){
      var gasInTank = charger.gasLeft
      charger.drive()
      var couldDriveIt = false
      if(charger.gasLeft == gasInTank - 25){
        couldDriveIt = true
      }
      expect(couldDriveIt).toBe(true)
    })
    it('should have the right amount of gas', function(){
      var enoughGasLeft = false
      if(charger.gasLeft === 50){
        enoughGasLeft = true;
      }
      expect(enoughGasLeft).toEqual(true)
    })
  })
    
})
