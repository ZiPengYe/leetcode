/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
const minOperations = (target, arr) => {
  const len = target.length;
  // 记录 target 对应的 idx
  const map = new Map;
  for (let i = 0; i < len; ++i) {
    map.set(target[i], i);
  }

  const d = [];

  for (const val of arr) {
    if (map.has(val)) {
      const idx = map.get(val);
      const it = binarySearch(d, idx);
      if (it !== d.length) {
        d[it] = idx;
      } else {
        d.push(idx);
      }
    }
  }

  return n - d.length;
};

const binarySearch = (d, target) => {
  const len = d.length;
  if (len === 0 || d[len - 1] < target) {
    return len;
  }

  let left = 0, right = len - 1;
  while (left < right) {
    const mid = left + ((right - left) >>> 1);
    if (d[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
