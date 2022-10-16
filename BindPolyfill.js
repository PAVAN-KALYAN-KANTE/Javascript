Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...args2) {
    fn.apply(context, [...args1, ...args2]);
  };
};

let person = {
  fname: "Black",
  lname: "Adam",
};

function getname() {
  console.log(this.fname + " " + this.lname);
}

const showname = getname.mybind(person);

showname();
