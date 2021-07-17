/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = (firstList, secondList) => {
  const m = firstList.length,
    n = secondList.length;
  const ans = [];
  let i = j = 0;

  while (i < m && j < n) {
    // 交点
    const min = Math.max(firstList[i][0], secondList[j][0]);
    const max = Math.min(firstList[i][1], secondList[j][1]);
    if (min <= max) {
      ans.push([min, max]);
    }
    // 移动指针
    if (firstList[i][1] < secondList[j][1]) {
      ++i;
    } else {
      ++j;
    }
  }
  return ans;
};
