'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  nuts: 3.55,
  wine: 2.32,
  chips: 1.05,
  beer: 2.7,
  cheese: 3.45,
};
// For some reason the looping solution below advices to avoid (for...in) and use Object.keys() instead.
function calculateTotalPrice(cart) {
  let total = 0;
  for (const item in cart) {
    total += cart[item];
  }
  return `Total: \u20AC ${total}`;
}

// Another solution
const calculateTotalPrice2 = (cart) => {
  const total = Object.values(cart).reduce((prev, curr) => prev + curr);
  return `Total: \u20AC ${total}`;
};

// Another solution
const calculateTotalPrice3 = (cart) => {
  let total = 0;
  Object.keys(cart).forEach((item) => (total += cart[item]));
  return `Total: \u20AC ${total}`;
};

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const expected = 'Total: \u20AC 13.07';
  const actual = calculateTotalPrice(cartForParty);
  console.assert(expected === actual);
}

function test() {
  test1();
  test2();
}

test();
