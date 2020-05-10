/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (N, trust) => (
  N === 1 ? 1 : trust.reduce(
    (acc, [a, b]) => {
      acc[a]--;
      acc[b]++;
      return acc;
    },
    Array(1 + N--).fill(0)
  ).findIndex(e => e === N)
);