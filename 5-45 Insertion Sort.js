/*
    -Insertion sort is a little bit more efficient than bubble sort in practice. Theoretically,
    they have the same Big O value.
    
    -The principle of insertion sort is simple. Keeping inserting a new value into a 
    sorted array.Insert it to the coorect spot so the sorted array remains sorted.
*/

let unsorted = [14, -4, 17, 6, 22, 1, -5];

insertionSort(unsorted);

function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }

  console.log(arr);
  return arr;
} 
