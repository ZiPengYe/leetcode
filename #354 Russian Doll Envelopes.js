const binarySearch = (f, target) => {
  let low = 0, high = f.length - 1;
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    if (f[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = (envelopes) => {
  const { length } = envelopes;
  if (!length) return 0;

  envelopes.sort(([a1, a2], [b1, b2]) => a1 - b1
    ? a1 - b1
    : b2 - a2
  );

  const f = [envelopes[0][1]];
  for (let i = 1; i < length; ++i) {
    const [,num] = envelopes[i];
    if (num > f[f.length - 1]) {
      f.push(num);
    } else {
      const index = binarySearch(f, num);
      f[index] = num;
    }
  }
  return f.length;
};
