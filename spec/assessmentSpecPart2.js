describe('Part 2:', function() {

  describe('Accountant', function() {

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
});
