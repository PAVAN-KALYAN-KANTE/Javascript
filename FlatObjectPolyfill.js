const myFlat = (obj, parent = "") => {
  let result = {};
  const generate = (obj, parent) => {
    for (let key in obj) {
      let newparent = parent + key;
      let value = obj[key];
      if (typeof value === "object") {
        generate(value, newparent + ".");
      } else {
        result[newparent] = value;
      }
    }
  };
  generate(obj, parent);
  return result;
};

var person = {
  name: "Ram",
  age: 27,
  vehicles: {
    car: "limousine",
    bike: "ktm-duke",
    airlines: {
      lufthansa: "Air123",
      "British airways": "Brt707",
    },
  },
};

console.log(myFlat(person));
