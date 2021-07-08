/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const advantageCount = (A, B) => {
  const sortA = [...A].sort((a, b) => a - b);
  const sortB = [...B].sort((a, b) => a - b);
  const assigned = {}; 
  const remaining = [];
  let j = 0;
  for (const a of sortA) {
    if (a > sortB[j]) {
      assigned[sortB[j]] = [
        ...assigned[sortB[j++]] || [],
        a,
      ];
    } else {
      remaining.push(a);
    }
  }
  const ans = [];
  for (let i = 0; i < B.length; i++) {
    if (assigned[B[i]] && assigned[B[i]].length) {
      ans[i] = assigned[B[i]].pop();
    } else {
      ans[i] = remaining.pop();
    }
  }
  return ans;
};