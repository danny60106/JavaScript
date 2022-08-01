/*
    Write a function that given a sorted array of integers and a number.Find if there's
    any pair in the array that has average of the given number.Find all of them.There
    might be multiple pairs fit the condition.
    
    Ex.
    averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)
    The number pair is -11 and 14, 0 and 3, 1 and 2
*/

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr[i], arr[j]);
      if ((arr[i] + arr[j]) / 2 == avg) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  // O(n^2) => O(n)

  console.log(result);
  return result;
}
