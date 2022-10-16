function a() {
  function b() {
    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
  }
  b();
}

a();

function a1() {
  function b1() {
    const gen = (x) => {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    };
    for (var i = 0; i < 5; i++) {
      gen(i);
    }
  }
  b1();
}

a1();
