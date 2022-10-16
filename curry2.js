//Sum of previous results

function curry() {
  let prevsum = 0;
  return function (newval = 0) {
    prevsum += newval;
    return prevsum;
  };
}

const sum = curry();

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));
console.log(sum());
