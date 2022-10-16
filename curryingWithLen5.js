const len = 5;

const sum = function (...args1) {
  if (args1.length === len) {
    return args1.reduce((acc, curr) => (acc = acc + curr), 0);
  } else {
    const rec = (...args2) => {
      args1 = args1.concat(args2);
      if (args1.length === len) {
        return args1.reduce((acc, curr) => (cc = acc + curr), 0);
      } else {
        return rec;
      }
    };
    return rec;
  }
};

console.log(sum(1)(2)(3)(4, 5));
