/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = answers => {
  let ans = 0;
  const count = {};
  for (const answer of answers) {
    if (!count[answer]) {
      count[answer] = 0;
    }
    if (!answer || (count[answer] % (answer + 1) === 0)) {
      ans += answer + 1;
    }
    if (answer !== 0) {
      count[answer]++;
    }
  }
  return ans;
};