/**
 * @type {string}'{a: 0, b: 0, ..., y: 0, z: 0}'
 */
const COUNT_STR = JSON.stringify(
  Array(26)
  .fill('')
  .map(
    (v, i) => String.fromCodePoint(i + 97),
  ).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: 0,
    }),
    {},
  )
);
/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = (s) => {
  const count = JSON.parse(COUNT_STR);
  for (const c of s) {
    count[c]++;
  }

  const out = Array(10).fill(0);
  out[0] = count['z'];
  out[2] = count['w'];
  out[4] = count['u'];
  out[6] = count['x'];
  out[8] = count['g'];
  out[3] = count['h'] - out[8];
  out[5] = count['f'] - out[4];
  out[7] = count['s'] - out[6];
  out[9] = count['i'] - out[5] - out[6] - out[8];
  out[1] = count['n'] - out[7] - 2 * out[9];

  return out.map((v, i) => Array(v).fill(i).join('')).join('');
};