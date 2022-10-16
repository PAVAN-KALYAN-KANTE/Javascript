Array.prototype.myFlat = function () {
  var newarr;
  newarr = this.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(curr.myFlat());
    } else {
      acc = [...acc, curr];
    }
    return acc;
  }, []);
  return newarr;
};

const arr = [1, [2, 3, [5, [7]]]];

console.log(arr.myFlat());
