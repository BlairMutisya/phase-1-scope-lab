let customerName = "bob";

function returnCustomerName() {
  return customerName;
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}


upperCaseCustomerName();

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "john";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "jim";
}
