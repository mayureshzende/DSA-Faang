/**
 * the formula we want to use
 * maxWater = (maxRight - maxLeft) * currentHeight
 */

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// Output: 6;

const height = [4, 2, 0, 3, 2, 5];
// Output: 9;
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxWater = 0;

  for (let h = 0; h < height.length; h++) {
    let maxRight = 0,
      maxLeft = 0,
      lefth = h;
    righth = h;
    // get the max height from the left of the element
    while (lefth >= 0) {
      if (height[lefth] > maxLeft) {
        maxLeft = height[lefth];
      }
      lefth--;
    }
    console.log("at ", h, "the maxLeft is", maxLeft);

    // get the max height from the right of the element
    // for (let mr = h + 1; mr < height.length; mr++) {
    //   if (height[mr] > maxRight) {
    //     maxRight = height[mr];
    //   }
    // }
    while (righth < height.length) {
      if (height[righth] > maxRight) {
        maxRight = height[righth];
      }
      righth++;
    }
    console.log("at ", h, "the maxRight is", maxRight);
    // calculate the maxWater by formula

    let currentWater = Math.min(maxRight, maxLeft) - height[h];
    maxWater += currentWater > 0 ? currentWater : 0;
    console.log("the maxWater till time is ", maxWater);
  }
  return maxWater;
};

console.log(trap(height));
