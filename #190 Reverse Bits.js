const M1 = 0x55555555, // 0b1010101010101010101010101010101
      M2 = 0x33333333, // 0b110011001100110011001100110011
      M4 = 0x0f0f0f0f, // 0b1111000011110000111100001111
      M8 = 0x00ff00ff; // 0b111111110000000011111111
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  n = n >>> 1 & M1 | (n & M1) << 1;
  n = n >>> 2 & M2 | (n & M2) << 2;
  n = n >>> 4 & M4 | (n & M4) << 4;
  n = n >>> 8 & M8 | (n & M8) << 8;
  return (n >>> 16 | n << 16) >>> 0;
}
