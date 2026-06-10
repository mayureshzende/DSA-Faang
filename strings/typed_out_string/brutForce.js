/**
 * time and space complexity
 * t: o( A + B)
 * s: O(A + B)
 */
/
/**
 * @param {string} str
 * @return {Array}
 * */
const getStrArr = (str) => {
  let res = [];
  for (let c of str) {
    if (c !== "#") {
      res.push(c);
    } else {
      res.pop();
    }
  }
  return res;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const sArr = getStrArr(s);
  const tArr = getStrArr(t);
  //   console.log(sArr.join(""));
  // console.log(tArr.join(""));
  return sArr.join("") === tArr.join("");
};
const s = "ab#c", t = "ad#c"
console.log(backspaceCompare(s, t));
