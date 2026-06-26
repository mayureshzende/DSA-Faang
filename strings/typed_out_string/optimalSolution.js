/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * time and space
 * t ( A + B)
 * S (N)
 */
var backspaceCompare = function (s, t) {
  const slen = s.length;
  const tlen = t.length;
  //   if (slen !== tlen) return false;

  let sptr = slen - 1;
  let tptr = tlen - 1;
  while (sptr >= 0 || tptr >= 0) {
    if (s[sptr] === "#" || t[tptr] === "#") {
      if (s[sptr] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          sptr--;
          backCount--;
          if (s[sptr] === "#") {
            backCount += 2;
          }
        }
      }
      if (t[tptr] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          tptr--;
          backCount--;
          if (t[tptr] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (s[sptr] !== t[tptr]) {
        return false;
      } else {
        sptr--;
        tptr--;
      }
    }
  }
  return true;
};
const s = "a##c",
  t = "ab##c";
console.log(backspaceCompare(s, t));
