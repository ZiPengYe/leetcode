/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = (dominoes) => {
  const len = dominoes.length;
  const forces = Array(len).fill(0);

  let force = 0;
  // 计算往右的力, 往左边的力记为0, 没受力的衰减当前的力
  for (let i = 0; i < len; ++i) {
    if (dominoes[i] === 'R') force = len;
    else if (dominoes[i] === 'L') force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] += force;
  }

  force = 0;
  // 计算往左的力, 往右边的力记为0, 没受力的衰减当前的力
  for (let i = len - 1; i > -1; --i) {
    if (dominoes[i] === 'L') force = len;
    else if (dominoes[i] === 'R') force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] -= force;
  }

  return forces.map((v) => v === 0
    ? '.'
    : v > 0
    ? 'R'
    : 'L'
  ).join('');
};
