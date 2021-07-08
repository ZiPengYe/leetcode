const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = score => score
  // score 的下标数组
  .map((value, index) => index)
  // 下标数组按 分数 排序, 即排名
  .sort((a, b) => score[b] - score[a])
  // 将排名按 score 顺序输出
  .reduce((acc, value, index) => {
    acc[value] = medals[index] || String(index + 1);
    return acc;
  }, []);