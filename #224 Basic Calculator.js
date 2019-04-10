/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
  // 结果栈, 符号栈
  const stack = [], opStack = [];
  // 总结果, 符号
  let result = 0, sign = 1;
  // 遍历字符串
  for(let i = 0; i < s.length; i++) {
    switch(s[i]) {
      case ' ':
        break;
      case '+':
        sign = 1;
        break;
      case '-':
        sign = -1;
        break;
      case '(':
        // 碰到开括号 则 压栈
        stack.push(result);
        result = 0;
        opStack.push(sign);
        sign = 1;
        break;
      case ')':
        // 碰到闭括号 则 出栈
        result = opStack.pop() * result + stack.pop();
        sign = 1;
        break;
      default:
        // 如果是数字
        let num = s[i];
        // 往后查所有数字
        while(i+1 < s.length && s[i+1] >= '0' && s[i+1] <= '9') {
          num += s[++i];
        }
        // 下面这个 (str - 0) 转换为数字是最快的... 比 parseInt(str), +str 都快
        result += sign * (num - 0);
    }
  }
  return result;
};
