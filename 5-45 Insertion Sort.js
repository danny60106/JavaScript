/*
    -Insertion sort is a little bit more efficient than bubble sort in practice. Theoretically,
    they have the same Big O value.
    
    -The principle of insertion sort is simple. Keeping inserting a new value into a 
    sorted array.Insert it to the coorect spot so the sorted array remains sorted.
*/
let unsorted = [14, -4, 17, 6, 22, 1, -5];

insertionSort(unsorted);
//由左往右不斷擴大array，去做搜尋比較
function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    i = j - 1; // j的前一項
    while (i >= 0 && arr[i] > key) {
      // 不斷的和前面的數字比較，數字越小放越前面
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key; // i == -1時
    console.log(arr);
  }
}

