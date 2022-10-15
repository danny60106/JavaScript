/*
    - The principle of selection sort is - select the smallest value in unsorted array, and
    then swap it with the left most value in this unsorted array.
*/

let unsorted = [14, -4, 17, 6, 22, 1, -5];

selectionSort(unsorted);

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) { //只做到倒數第二個，最後一個數字在程式結束時，位置就是正確的。
    let minIndex = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap arr[minIndex] and arr[i]
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }

  console.log(arr);
  return arr;
}
