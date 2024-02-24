const haystack = "sadbutsad";
const needle = "sad";

var strStr = function (haystack, needle) {
  let answer;

  answer = haystack.indexOf(needle);

  return answer;
};

console.log(strStr(haystack, needle));
