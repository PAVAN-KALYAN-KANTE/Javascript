Array.prototype.mymap = function (fn) {
  const result = [];
  this.forEach((ele, idx) => {
    result.push(fn(ele, idx, this));
  });
  return result;
};

const arr = [1, 2, 3];

console.log(arr.map((x, i) => 2 * i));
