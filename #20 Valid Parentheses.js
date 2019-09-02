const openMap = {
    '(': 1,
    '[': 2,
    '{': 3,
};
const closeMap = {
    ')': 1,
    ']': 2,
    '}': 3,
};
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    // 堆栈
    const stack = [];
    for(let i = 0, len = s.length; i < len; i++) {
        const char = s[i];
        const open = openMap[char];
        if(open) {
            // 开括号 存栈
            stack.push(open);
            continue;
        }
        const close = closeMap[char];
        // 闭括号 出栈 比较
        if(close && stack.pop() !== close) return false;
    }
    return stack.length
        ? false
        : true;
};