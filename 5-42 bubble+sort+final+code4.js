function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
        swapping = true;
      }
    }
    if (swapping == false) {
      break;
    }
  }
  console.log("It takes " + step + " steps to complete.");
  console.log(arr);
}

bubbleSort([1, 2, 3, 4, 0, 5, 6, 7]);
