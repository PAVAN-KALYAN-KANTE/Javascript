Array.prototype.myfilter = function (fn) {
  let out = [];
  this.forEach((ele, idx) => {
    if (fn(ele, idx, this)) {
      out = [...out, ele];
    }
  });
  return out;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].myfilter((x) => x % 2 !== 0));
