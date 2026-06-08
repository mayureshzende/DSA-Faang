let res = [];
const nestesdArray = (arr) => {
  for (let i in arr) {
    if (Array.isArray(arr[i])) {
      nestesdArray(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

// const arr = [1, [2], [3, [[4]]]];
// const arr = [1, [2, [3, [4, 5]]], 6, [7, 8]];
const arr = [1, [2, [3, 4], 5]];
console.log(nestesdArray(arr));
