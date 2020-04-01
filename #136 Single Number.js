/**
 * 直接 异或运算, 相同的抵消, 最后剩下的就是不同的.(其实可能会溢出..)
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => nums.reduce((acc, cur) => acc ^ cur, 0);