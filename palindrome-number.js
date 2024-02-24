var isPalindrome = function (x) {
  const str = x.toString();
  let start = 0;
  let end = str.length - 1;

  while (start !== end && start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(102101));
