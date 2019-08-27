// 最小边界
const min = 1 << 31;
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    // 拿到正负值
    const ng = Math.abs(x) !== x ? -1 : 1;
    // 转成字符串， 数组， 反转， 字符串，整型
    // number => string => array => reverse => string => number
    const result = ng * parseInt((x+ '').split('').reverse().join(''), 10);
    // 是否超过边界
    return result < min || result >= (-1 * min)
        ? 0
        : result;
};