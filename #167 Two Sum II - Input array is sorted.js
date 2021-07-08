/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    const total = numbers[left] + numbers[right];
    if (total === target) {
      return [left + 1, right + 1];
    } else if (total < target) {
      ++left;
    } else {
      --right;
    }
  }
  return [-1, -1];
};