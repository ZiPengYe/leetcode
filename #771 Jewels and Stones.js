/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  const { length: JLen } = J;
  const { length: SLen } = S;
  const map = {};
  let ans = 0;
  for (let i = 0; i < JLen; i++) {
    map[J[i]] = true;
  }
  for (let i = 0; i < SLen; i++) {
    if (map[S[i]]) ans++;
  }
  return ans;
};