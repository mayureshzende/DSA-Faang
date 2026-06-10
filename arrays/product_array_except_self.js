/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * [1,2,3,4]
 * left [1, 1, 2, 6]
 * right[24, 12, 4, 1]
 * */
// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];
// Output: [24, 12, 8, 6];
var productExceptSelf = function (nums) {
  const leftArr = new Array(nums.length).fill(0);
  leftArr[0] = 1;

  const rightArr = new Array(nums.length).fill(0);
  rightArr[rightArr.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftArr[i - 1] * nums[i - 1];
  }

  for (let i = rightArr.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = leftArr[i] * rightArr[i];
  }
  return nums;
};

console.log(productExceptSelf(nums));
