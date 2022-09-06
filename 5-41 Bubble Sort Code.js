/*
    Bubble sort compares adjacent elements and swaps them if they are in the wrong order.
    -- => Compare Operator
    Step 1.
            4, 7, 1, 2, 5, 3
    Step 2.             -  -
            4, 7, 1, 2, 3, 5  Swap(3,5)
    Step 3.          -  -
            4, 7, 1, 2, 3, 5
    Step 4.       -  -  
            4, 7, 1, 2, 3, 5
    Step 5.    -  -           
            4, 1, 7, 2, 3, 5  Swap(7,1)
    Step 6. -  -
            1, 4, 7, 2, 3, 5  Swap(4,1)
*/ 

function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
      }
    }
  }
  console.log("It takes " + step + " steps to complete.");
  console.log(arr);
}

let test = [];

for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
console.log(test);
bubbleSort(test);
