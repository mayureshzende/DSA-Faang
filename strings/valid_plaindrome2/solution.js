/**
 * @param {string}
 * @return {boolean}
 * time complexity o(n)
 * space comlexity 0(1)
 */

const inp = "abca";
const subPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
var validPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return subPalindrome(s, l + 1, r) || subPalindrome(s, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};

console.log(validPalindrome(inp));
