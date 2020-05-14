/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
  const stack = [];
  let rm = 0;
  for (let i = 0, { length } = num; i < length; i++) {
    while (stack.length && num[i] < stack[stack.length - 1] && rm < k) {
      stack.pop();
      rm++;
    }
    stack.push(num[i]);
  }

  while (rm < k) {
    stack.pop();  
    rm++;
  }

  while (stack.length && stack[0] === '0') {
    stack.shift();
  }

  return stack.length ? stack.join('') : '0';
};