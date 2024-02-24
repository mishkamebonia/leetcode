// const nums = [3, 2, 2, 3];
// const val = 3;

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

var removeElement = function (nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};

console.log(removeElement(nums, val));
