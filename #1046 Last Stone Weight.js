/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => a - b);
    stones.push(stones.pop() - stones.pop());
  }
  return stones[0];
};