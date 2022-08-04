/*
    Write a function called minSubLength which accepts two parameters, an array of
    positive integers and a positive integer.This function should return the minimal
    length of a continuous subarray - the sum of elements inside this subarray has to
    be greater than or equal to the positive integer parameter.If subarray not found,
    then return 0.
    
    Ex.
    minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11)); //2
*/


maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3); // 12

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let temValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    temValue = temValue + arr[j] - arr[j - size];
    if (temValue > maxValue) {
      maxValue = temValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}
