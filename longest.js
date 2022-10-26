/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let final = 0;
  let total = 0;
  let openCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      openCount++;
    }

    if (s[i] == ")" && openCount > 0) {
      openCount--;
      total += 2;
    }

    if (s[i] == ")" && openCount == 0) {
      if (final < total) final = total;
      total = 0;
    }

    if (s[i] == ")" && openCount === 0) {
      if (final < total) {
        final = total;
        total = 0;
      }
    }
    if (openCount == closeCount) {
      total = total + openCount + closeCount;
      openCount = 0;
      closeCount = 0;
    }
  }
  if (openCount > closeCount && total == 0) {
    total = closeCount * 2;
  }

  return final;
}

let s = ")()()())()()()()()";

console.log(longestValidParentheses(s));
