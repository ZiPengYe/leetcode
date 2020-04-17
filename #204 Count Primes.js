/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  const isPrime = Array(n).fill(true);
  for (let i = 2, sqrtN = Math.sqrt(n); i < sqrtN; i++)
    if (isPrime[i])
      for (let j = i * i; j < n; j += i)
        isPrime[j] = false;
  let ans = 0;
  for (let i = 2; i < n; i++)
    if (isPrime[i]) ans++;
  return ans;
};