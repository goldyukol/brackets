module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const arr = str.split("");
  const brackets = Object.fromEntries(bracketsConfig);

  arr.forEach((el) => {
    if (brackets[stack[stack.length - 1]] === el) {
      return stack.pop(el);
    } 
    stack.push(el);
  });

  return stack.length === 0;
};