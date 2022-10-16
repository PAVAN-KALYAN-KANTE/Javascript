var sum = (a) => {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2)(2)(3)(5)(6)());
