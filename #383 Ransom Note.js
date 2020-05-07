/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const { length: ransomLen } = ransomNote;
  const { length: magazineLen } = magazine;
  const ransomMap = {};
  for (let i = 0; i < ransomLen; i++) {
    ransomMap[ransomNote[i]] = (ransomMap[ransomNote[i]] || 0) + 1;
  }
  for (let i = 0; i < magazineLen; i++) {
    if (ransomMap[magazine[i]]) ransomMap[magazine[i]]--;
  }
  return Object.values(ransomMap).every(e => e === 0);
};