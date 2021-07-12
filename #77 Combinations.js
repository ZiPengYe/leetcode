/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const ans = [];

  const dfs = (cur, temp) => {
    if (temp.length + (n - cur + 1) < k) return;

    if (temp.length === k) return ans.push(temp);

    dfs(cur + 1, [...temp, cur]);
    dfs(cur + 1, temp);
  };

  dfs(1, []);
  return ans;
};
