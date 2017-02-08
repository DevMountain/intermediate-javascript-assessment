// Chaining .thens
// Context - .bind
// Closures



//Create a function called accountingOffice. This function will take in a parameter called assets and return a function called accountant. accountant will take in a parameter called liabilities and return assets added to liabilities.

function accountingOffice(assets) {
  return function accountant(liabilities) {
    return assets + liabilities;
  }
}
