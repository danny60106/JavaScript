/*
  Recursion
    - A function that calls itself.
    - Recursion is using a data structure called "stack".When we are calling a function
    inside another function, we are on the call stack.
    - Recursion is also a mathematical relation in sequences.
*/

function rs(n) {
  console.log(`We are inside function rs(${n})`);
  if (n == 1) {
    return 10;
  } else {
    return rs(n - 1) + 15;
  }
}

console.log(rs(3));
