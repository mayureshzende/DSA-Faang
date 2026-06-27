/**
 * @param {string} s
 * @return {boolean}
 */
const inp = "A man, a plan, a canal: Panama";
var isPalindrome = function (s) {
  const formattedString = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0,
    right = formattedString.length - 1;
  while (left < right) {
    if (formattedString[left] !== formattedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome(inp));
