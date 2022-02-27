module.exports = function check(str, bracketsConfig) {
  let stack = [];

  const brackets = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    if (brackets[stack[stack.length - 1]] === str[i]) {
      stack.pop(str[i]);

      continue;
    }

    stack.push(str[i]);
  }

  return stack.length === 0;
};
