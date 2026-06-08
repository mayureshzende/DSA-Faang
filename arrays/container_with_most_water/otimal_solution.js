/**
 * this is  a  brut force solution
 *  using 2 for loop a,b and traversing in m * n
 * time complexity = o ( N )
 * space complexity = o (N)
 * we will use the formula to find current Area => min of (a,b) * (b index - a index)
 * and compare with the maxArea and reassign if that is greater
 */

// const height = [1, 8, 6, 2, 5, 4, 8, 3, 1];
const height = [4, 8, 1, 2, 3, 9];

const maxArea = (bars) => {
  let maxAreaSoFar = 0;
  let left = 0;
  let right = bars.length - 1;

  while (left < right) {
    let min = Math.min(bars[left], bars[right]);
    let width = right - left;
    let currentArea = min * width;
    maxAreaSoFar = Math.max(currentArea, maxAreaSoFar);
    // if (bars[left] === min) {
    //   left++;
    // } else if (bars[right] === min) {
    //   right--;
    // }
    if (bars[p1] <= bars[p2]) {
      left++;
    } else {
      right--;
    }
  }

  return maxAreaSoFar;
};

console.log(maxArea(height));
