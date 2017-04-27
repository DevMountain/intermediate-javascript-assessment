describe('Part 3:', function() {


  describe('callBinding', function() {

    beforeEach(function() {
      spyOn(binding, 'call');

      callBinding(bindObjectArray, binding.call, 2);
    });

    it('should be a function', function() {
			expect(callBinding)
				.toEqual(jasmine.any(Function));
    });

    var updatedObj = callBinding(bindObjectArray, binding.call, 2);

    it('should return an object', function() {
      expect(updatedObj).toEqual(jasmine.any(Object));
    });

    it('should have updated object using call on updateAnimal function', function() {
      expect(updatedObj.name).toEqual('Trogdor');
    });

    it('should have called the updateAnimal function with call', function() {
      expect(binding.call).toHaveBeenCalled();
    });
  });

  describe('applyBinding', function() {
    beforeEach(function() {
      spyOn(binding, 'apply');

      applyBinding(bindObjectArray, binding.apply, 1);
    });

    it('should be a function', function() {
			expect(applyBinding)
				.toEqual(jasmine.any(Function));
    });

    var updatedObj = applyBinding(bindObjectArray, binding.apply, 1);

    it('should return an object', function() {
      expect(updatedObj).toEqual(jasmine.any(Object));
    });

    it('should have updated object using apply on updateAnimal function', function() {
      expect(updatedObj.favorites.join(', ') === ['Waffles', 'Butterflys', 'being majestic', 'eating rainbows'].join(', ')).toEqual(true);
    });

    it('should have called the updateAnimal function with apply', function() {
      expect(binding.apply).toHaveBeenCalled();
    });
  });

	describe('promiseMe', function() {
		it('should be a function', function() {
			expect(promiseMe)
				.toEqual(jasmine.any(Function));
		});

		it('should return a promise', function() {
  		var promise = promiseMe($q);
			expect(promise.then)
				.toEqual(jasmine.any(Function));
      promise
        .then(function(response) {
          foo = undefined;
        });
		});

		it('should not change foo before timeout runs', function() {
		  var promise = promiseMe($q);
			expect(foo)
				.toBe(undefined);
		});

		it("should change foo to 'bar' on timeout", function(done) {
		  var promise = promiseMe($q);
			promise
				.then(function(response) {
					expect(response)
						.toEqual('bar');
					done();
				});
		});

	});

	describe('emailList', function() {

    it('should be a function', function() {
			expect(emailList)
				.toEqual(jasmine.any(Function));
    });

    var $q = Q;
    var promise = emailList($q, $http);

    it('should return a promise', function() {
			expect(promise.then)
				.toEqual(jasmine.any(Function));
		});

		it('should return an array of emails from the request', function(done) {
			promise
				.then(function(response) {
					expect(response.join(', ') === emails.join(', '))
						.toEqual(true);
					done();
				});
		});

	});

});
