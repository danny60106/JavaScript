/*
    Write a function that collects all value in an array of arrays and return an array of
    values collected.
*/

let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

#1
let result = [];

function collector(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            collector(arr[i]);
        } else{
            result.push(arr[i]);
        }
    }
}

collector(arrs);
console.log(result);

#2
function collector(arr1) {
  let result = [];
  helper(arr1);
  return result;

  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

console.log(collector(arrs));
