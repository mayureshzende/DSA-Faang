/**
 * time complexity: O (n)
 * space complexity: O (m)
 */

const s = "abcadcbb";
//         l
//         r
// const s = "pwwkew";
// const s = "abcabcbb";

function getLongestSubstring(str) {
  if (str.length < 1) return str.length;

  let longest = 0;
  let left = 0;
  const seenChars = {};
  for (let right = 0; right < str.length; right++) {
    let currentChar = str[right];
    let prevSeenChar = seenChars[currentChar];
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(getLongestSubstring(s));
