/**
 * time complexity: O (n ^ 2 )
 * space complexity: O (n)
 */

// const s = "abcabcbb";
const s = "pwwkew";

function getLongestSubstring(str) {
  if (str.length <= 1) return str.length;
  let longest = 0;
  const strMap = new Map();
  for (let i = 0; i < str.length; i++) {
    let currentstr = 0;
    for (let j = i; j < str.length; j++) {
      if (strMap.has(str[j])) {
        strMap.clear();
        break;
      } else {
        strMap.set(str[j]);
        currentstr += 1;
      }
      if (currentstr > longest) {
        longest = currentstr;
      }
    }
  }
  return longest;
}

console.log(getLongestSubstring(s));
