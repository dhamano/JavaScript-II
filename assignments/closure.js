// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const goodbye = 'Thanks for all the fish!';
function printGoodbye() { return goodbye; }
console.log(printGoodbye());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let runningCount = 0;
  return (function() { return ++runningCount });
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (incDec) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counting = 0;
  return(function(incDec) {
    if(incDec ==='increment') {
      return (++counting);
    } else if (incDec === 'decrement') {
      return(--counting);
    } else { return (counting); }
  });
};
const newFactory = counterFactory();
console.log(newFactory('increment'));
console.log(newFactory('increment'));
console.log(newFactory('increment'));
console.log(newFactory('decrement'));
console.log(newFactory('decrement'));
console.log(newFactory('increment'));
console.log(newFactory());

