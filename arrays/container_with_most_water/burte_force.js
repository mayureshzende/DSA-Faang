/**
 * this is  a  brut force solution
 *  using 2 for loop a,b and traversing in m * n
 * time complexity = o ( N ^ 2)
 * space complexity = o (N)
 * we will use the formula to find current Area => min of (a,b) * (b index - a index)
 * and compare with the maxArea and reassign if that is greater
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 1];

const maxArea = (bars) => {
  let maxAreaSoFar = 0;

  for (ai = 0; ai < bars.length; ai++) {
    for (bi = ai + 1; bi < bars.length; bi++) {
      let currentArea = Math.min(bars[ai], bars[bi]) * (bi - ai);
      if (currentArea > maxAreaSoFar) {
        maxAreaSoFar = currentArea;
      }
    }
  }
  return maxAreaSoFar;
};

console.log(maxArea(height));
