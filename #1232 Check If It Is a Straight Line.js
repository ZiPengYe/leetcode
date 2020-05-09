/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
  const { length } = coordinates;
  const [f, s] = coordinates;
  const k = Math.abs((s[1] - f[1]) / (s[0] - f[0]));
  for (let i = 2; i < length; i++)
    if (k !== Math.abs((coordinates[i][1] - f[1]) / (coordinates[i][0] - f[0]))) return false;
  return true;
};