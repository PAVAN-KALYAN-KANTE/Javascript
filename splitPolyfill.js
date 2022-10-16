String.prototype.mySplit = function (delimeter) {
  let string = this;
  let res = [];
  if (delimeter === "") {
    return Array.from(string);
  } else {
    const gen = (str, i) => {
      if (i >= string.length) return;
      else {
        let idx = str.indexOf(delimeter);
        if (idx !== -1) {
          res.push(str.substring(0, idx));
          gen(str.substring(idx + delimeter.length), idx + delimeter.length);
        } else {
          res.push(str);
        }
      }
    };

    gen(string, 0);
  }

  return res;
};

var str = "Hi I am Kalyan fan of Batman";

console.log(str.mySplit(" "));
console.log(str.mySplit("a"));
