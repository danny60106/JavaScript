// array
let arr = ["Harry", "Ron", "Snap"];

// JS for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  console.log(i);
}

// forEach 1
arr.forEach((person) => {
  console.log(person);
});

// forEach 2
arr.forEach((person, index) => {
  console.log(person);
  console.log(index);
});
