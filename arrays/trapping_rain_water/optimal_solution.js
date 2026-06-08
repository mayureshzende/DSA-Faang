/**
 * the formula we want to use
 * maxWater = (maxRight - maxLeft) * currentHeight
 * time complexity = O(n)
 * space complexity = O(1)
 */

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6;

// const height = [4, 2, 0, 3, 2, 5];
// Output: 9;
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxWater = 0;
  let left = 0,
    right = height.length - 1,
    maxLeft = 0,
    maxRight = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        maxWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        maxWater += maxRight - height[right];
      }
      right--;
    }
  }
  return maxWater;
};

console.log(trap(height));
