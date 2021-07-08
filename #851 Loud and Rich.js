/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
const loudAndRich = (richer, quiet) => {
  const { length } = quiet;
  const answer = Array(length).fill(-1);
  const graph = richer.reduce(
    (acc, [p, q]) => {
      acc[q].push(p);
      return acc;
    },
    Array(length).fill(void 0).map(() => []),
  );

  const dfs = (i) => {
    if (answer[i] !== -1) return answer[i];
    answer[i] = i;
    for (const j of graph[i]) {
      const cand = dfs(j);
      if (quiet[cand] < quiet[answer[i]]) {
        answer[i] = cand;
      }
    }
    return answer[i];
  };

  for (let i = 0; i < length; ++i) {
    dfs(i);
  }
  return answer;
};