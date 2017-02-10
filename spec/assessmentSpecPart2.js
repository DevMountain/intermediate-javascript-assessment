describe('Part 2:', function() {

  describe('No weak link', function() {

    it('one and two are undefined before function call', function() {
      expect(one).toEqual('don\'t change this string!');
      expect(two).toEqual('don\'t change this string, either!');
    })

    it('change variable values', function(done) {

      noWeakLink().then(function(res) {
        expect(one.id).toEqual(users[0].id)
        expect(two.id).toEqual(users[2].id)
        expect(res).toEqual(users[9]);
        done();
      })
    })

  })

  describe('Horton', function() {

    it('tester fn', function() {
      expect(large.bind(elephant) + '').toEqual(boundToElephant + '')
    })

  })

  describe('accountant', function() {

    it('accountingOffice should exist', function() {
      expect(accountingOffice).toEqual(jasmine.any(Function));
    })

    it('accountingOffice should return accountant', function() {
      expect(accountingOffice()).toEqual(jasmine.any(Function))
    })

    it('assets and liabilities', function() {
      var acc = accountingOffice(100);
      expect(acc(-100)).toEqual(0);
    })

  })

  describe('rememberall', function() {

    it('forgetter should exist', function() {
      expect(forgetter).toEqual(jasmine.any(Function));
    })

    it('forgetter should return function', function() {
      expect(forgetter()).toEqual(jasmine.any(Function))
    })

    it('rememberall returns object', function() {
      var rem = forgetter('Neville');
      expect(rem('broomstick')).toEqual(jasmine.any(Object));
    })

    it('object contains name and correct array', function() {
      var neville = forgetter('neville');
      neville('hogwarts');
      neville('hp');
      neville('hogsmead');
      neville('quidditch');
      var resultsNeville = neville('butterbeer');
      expect(resultsNeville.remember.join('')).toEqual('hogwartshphogsmeadquidditchbutterbeer');
      expect(resultsNeville.name).toEqual('neville');
      expect(resultsNeville.remember).toEqual(jasmine.any(Array));

    })
  })

  describe('frodo', function() {

    it('should exist', function() {
      expect(frodo).toEqual(jasmine.any(Function));
    })

    it('should return object with two methods', function() {
      expect(frodo()).toEqual(jasmine.any(Object));
      expect(frodo().dinnerOverFire).toEqual(jasmine.any(Function));
      expect(frodo().hidingInBush).toEqual(jasmine.any(Function));
    })

    it('expect correct hunger/danger values after method invoke', function() {
      var firstTest = frodo(50,50);
      firstTest.dinnerOverFire();
      firstTest.dinnerOverFire();
      firstTest.dinnerOverFire();
      var firstTestValues = firstTest.dinnerOverFire();
      expect(firstTestValues.hunger).toEqual(0)
      expect(firstTestValues.danger).toEqual(100)
      var secondTest = frodo(0,100);
      secondTest.hidingInBush();
      secondTest.hidingInBush();
      secondTest.hidingInBush();
      secondTest.hidingInBush();
      var secondTestValues = secondTest.hidingInBush();
      expect(secondTestValues.hunger).toEqual(100);
      expect(secondTestValues.danger).toEqual(0);
    })
  })



//end of part2
});
