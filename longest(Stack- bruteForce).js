/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      if (isValid(s.substring(i, j))) {
        console.log(s.substring(i, j));
        maxLen = Math.max(maxLen, j - i);
      }
    }
  }
  return maxLen;
}

function isValid(tempStr) {
  let stack = [];
  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr[i] === "(") {
      stack.push(tempStr[i]);
    } else if (stack.length !== 0 && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

let s = "(())))((()))";

console.log(longestValidParentheses(s));
