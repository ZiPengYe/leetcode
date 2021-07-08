const VOWEL_REGEX = /[aeiou]/ig;
/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = (s) => {
  const center = s.length / 2;
  const left = s.slice(0, center).match(VOWEL_REGEX);
  const right = s.slice(center).match(VOWEL_REGEX);
  return left?.legnth === right?.length;
};