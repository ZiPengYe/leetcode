// 罗马字 => 值
const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    let result = 0;
    // 倒序遍历字符串(即,从小位到高位顺序)
    for(let len = s.length, i = len - 1, prev = 0; i > -1; i--) {
        // 当前值
        const v = romanMap[s[i]];
        // 如果当前值比前一个值小, 说明是要减去的
        if(prev > v) result -= v;
        else result += v;
        prev = v;
    }
    return result;
};