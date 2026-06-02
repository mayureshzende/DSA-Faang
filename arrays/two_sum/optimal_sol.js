/**
 * input array [1,3,7,9,2]
 * traget 11
 *
 * time complexity 0(n)
 * space complecity o(n)
 * */

const inp_array = [1, 3, 7, 9, 2];
const target = 11;

const find2sums = (nums, target) => {
  const hashMap = {};

  for (let p1 = 0; p1 < nums.length; p1++) {
    const currentVal = hashMap[nums[p1]];
    if (currentVal >= 0) {
      return [currentVal, p1];
    } else {
      const diff = target - nums[p1];
      hashMap[diff] = p1;
    }
  }
  return null;
};

console.log(find2sums(inp_array, target));
