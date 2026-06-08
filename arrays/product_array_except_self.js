/**
 * @param {number[]} nums
 * @return {number[]}
 */

// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];
// Output: [24, 12, 8, 6];
var productExceptSelf = function (nums) {
  const overallMul = nums.reduce((acc, curr) => (acc = acc * curr), 1);
  console.log(overallMul);
  const newArr = nums.map((n) => {
    let cur = 0;
    if (n < 0) {
      return 0;
    }
    return overallMul / n;
  });
  return newArr;
};

console.log(productExceptSelf(nums));
