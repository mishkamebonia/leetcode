const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  let preset = "";
  let firstEl = strs[0];

  for (let i = 0; i < firstEl.length; i++) {
    for (let j = strs.length - 1; j < strs.length; j++) {
      if (firstEl[i] === strs[j][i]) {
        preset += firstEl[i];
      } else {
        return preset;
      }
    }
  }

  return preset;
};

console.log(longestCommonPrefix(strs));
