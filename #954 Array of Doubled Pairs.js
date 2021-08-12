/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canReorderDoubled = (arr) => {
  const counter = new Map();
  for (const x of arr) {
    counter.set(x, (counter.get(x) || 0) + 1);
  }

  const absSortArr = Array.from(arr);
  absSortArr.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (const x of absSortArr) {
    if (!counter.get(x)) continue;
    if (!counter.get(2 * x)) return false;
    counter.set(x, counter.get(x) - 1);
    counter.set(2 * x, counter.get(2 * x) - 1);
  }

  return true;
};
