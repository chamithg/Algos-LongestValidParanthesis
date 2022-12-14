/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let max = 0;
  let stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        let len = i - stack[stack.length - 1];
        max = Math.max(max, len);
      }
    }
  }
  return max;
}

let s = "(())))((()))";

console.log(longestValidParentheses(s));
