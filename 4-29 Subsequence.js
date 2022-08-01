/*
    A subsequence of a string is a new string that is formed from the original string by deleting
    some (can be none) of the characters without disturbing the relative positions of the 
    remaining characters.
    
    Write a function that checks of one string is a subsequence of the other string.
    
    Ex.
    
    isSubsquence("hello", "hello Dear"); true
    isSubsquence("book", "brooklyn"); true
    isSubsquence("abc", "bac"); false
    *order matters*
*/

// isSubsequence("hello", "hello Dear"); // true
// isSubsequence("book", "brooklyn"); // true
// isSubsequence("abc", "bac"); // false (order matters)
isSubsequence("", "abc"); // true

function isSubsequence(str1, str2) {
  // Empty String 的情況
  if (str1.length == 0) {
    console.log(true);
    return true;
  }

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      console.log(true);
      return true;
    }
    pointer2++;
  }

  console.log(false);
  return false;
}
