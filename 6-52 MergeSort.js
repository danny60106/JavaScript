/*
    -The principle of merge sort is quite simple. Take advantage of the fact that
    combining two sorted arrays has O(n) time complexity, using the pointer skill.
    
    -This sorting algorithm is a classic example of "divide and conquer."
*/
function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  // a1 or a2 might have some elements left
  // use loop to put them all into result

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(right), mergeSort(left)); // 不斷遞迴後分成逐一元素的array
  }
}

console.log(mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054]));
