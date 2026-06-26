/**
 * input array [1,3,7,9,2]
 * traget 11
 *
 * time complexity 0(n ^ 2)
 * space complecity o(1)
 * */

const inp_array = [1, 3, 7, 9, 2];
const target = 5;

const find2sums = (nums, target) => {
  // keep 2 pointers to check the
  // pointer one, will subtract from the traget,
  // pointer 2, will check if there is the difference available

  for (let p1 = 0; p1 < nums.length; p1++) {
    let diff = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (nums[p2] === diff) {
        return [p1, p2];
      }
    }
  }

  return null;
};

console.log(find2sums(inp_array, target));
