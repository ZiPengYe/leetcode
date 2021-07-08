/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
  if (arr[start] === 0) return true;
  const { length } = arr;
  const queue = [start];
  const used = new Set(queue);

  while (queue.length) {
    const i = queue.pop();
    for (const v of [i + arr[i], i - arr[i]]) {
      if (arr[v] === 0) return true;
      if (v >= length || used.has(v)) continue;
      queue.push(v);
      used.add(v);
    }
  }
  return false;
};