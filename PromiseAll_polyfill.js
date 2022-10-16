const mem = function (x) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(x);
    }, x);
  });
};

const arr = [mem(1000), mem(2000), mem(3000)];

const propoly = (arr) => {
  return new Promise((resolve, reject) => {
    const out = [];
    arr.forEach((ele, idx) => {
      ele.then((data) => {
        out[idx] = data;
        if (idx === arr.length - 1) {
          resolve(out);
        }
      });
    });
  });
};

propoly(arr).then((data) => {
  console.log(data);
});
