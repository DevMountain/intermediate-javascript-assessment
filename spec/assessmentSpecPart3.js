describe('Part 3:', function() {

	describe('promiseMe', function() {

		it('should be a function', function() {
			expect(promiseMe)
				.toEqual(jasmine.any(Function));
		});

		var promise = promiseMe($q);

		it('should return a promise', function() {
			expect(promise.then)
				.toEqual(jasmine.any(Function));
		});

		it('should not change foo before resolve', function() {
			expect(foo)
				.toBe(undefined);
		});

		it('should change foo after resolve', function(done) {
			promise
				.then(function(response) {
					expect(foo)
						.toEqual('bar');
					done();
				});
		});

	});

	describe('middleMan', function() {
		middleMan($q, $http)

	});

});
