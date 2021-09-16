/**
 * @param {number[]} arr
 * @return {number}
 */
const maxTurbulenceSize = (arr) => {
  const len = arr.length;
  let res = 1;
  let dp0 = dp1 = 1;
  for (let i = 1; i < len; ++i) {
    if (arr[i - 1] > arr[i]) {
      dp0 = dp1 + 1;
      dp1 = 1;
    } else if (arr[i - 1] < arr[i]) {
      dp1 = dp0 + 1;
      dp0 = 1;
    } else {
      dp0 = dp1 = 1;
    }
    res = Math.max(res, dp0, dp1);
  }
  return res;
};
