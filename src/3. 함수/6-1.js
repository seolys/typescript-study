function Counter() {
  this.value = 0;
  this.add = (amount) => {
    this.value += amount;
  };
}
const counter = new Counter();
console.log(counter.value); // 0
counter.add(5);
console.log(counter.value); // 5
const add = counter.add;
add(5);
console.log(counter.value); // 10

// ------------------------------------------

function Counter2() {
  this.value = 0;
  this.add = function (amount) {
    this.value += amount;
    console.log(this === global);
  };
}

const counter2 = new Counter2();
console.log(counter2.value); // 0
counter2.add(5);
console.log(counter2.value); // 5

const add2 = counter2.add;
add2(5);
console.log(counter2.value); // 5

//----------------------------------

class Counter3 {
  value = 0;
  add = (amount) => {
    this.value += amount;
  };
}

//---------------------------------

const counter4 = {
  value: 0,
  add: function (amount) {
    this.value += amount;
  },
};
console.log(counter4.value);
counter4.add(5);
counter4.add(5);
console.log(counter4.value);
const add4 = counter4.add;
add4(5);
console.log(counter4.value);

//---------------------------------
const counter5 = {
  value: 0,
  add: (amount) => {
    this.value += amount;
  },
};
console.log(counter5.value);
counter5.add(5);
console.log(counter5.value);
const add5 = counter5.add;
add5(5);
console.log(counter5.value);
console.log(global.value);
console.log(this.value);
