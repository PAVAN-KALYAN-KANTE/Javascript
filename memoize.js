const memoize = (fn) => {
  mymap = {};
  return (...args) => {
    strargs = JSON.stringify(args);
    if (strargs in mymap) {
      return mymap[strargs];
    } else {
      res = fn.apply(this, args);
      mymap[strargs] = res;
      return res;
    }
  };
};

const addi = (...args) => {
  result = 0;
  for (item of args) {
    result += item;
  }

  return result;
};

const fact = (x) => {
  if (x === 0 || x === 1) {
    return 1;
  }
  return x * fact(x - 1);
};

const testSum = memoize(addi);

const testFact = memoize(fact);

console.log(testSum(1, 2, 3, 6, 8, 7));

console.log(testFact(5));
