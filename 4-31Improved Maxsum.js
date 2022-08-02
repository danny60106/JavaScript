maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3); // 12

function maxSum(arr, size) {
  // 判斷size不大於陣列長度
  if (size > arr.length) {
    return null;
  }
  
  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let temValue = maxValue;
  // 因為已算完index[0]-index[size]的總和，故從size作為for迴圈起點
  for (let j = size; j < arr.length; j++) {
    // 加入新的一項，減去舊的一項，維持Sliding Window size長度
    temValue = temValue + arr[j] - arr[j - size];
    if (temValue > maxValue) {
      maxValue = temValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}
