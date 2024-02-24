// task 26

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      index++;
      nums[index] = nums[i];
    }
  }

  return index + 1;
};

console.log(removeDuplicates(nums));
