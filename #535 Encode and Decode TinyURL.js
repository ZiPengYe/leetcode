const ORIGIN = 'http://tinyurl.com/';
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LENGTH = ALPHABET.length;
const map = {};
const getRand = () => Array(5).fill(void 0).map(() => ALPHABET.charAt(Math.floor(Math.random() * ALPHABET_LENGTH))).join('');
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = (longUrl) => {
  let key = getRand();
  for (; key in map; key = getRand());
  map[key] = longUrl;
  return ORIGIN + key;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = (shortUrl) => map[shortUrl.replace(ORIGIN, '')];

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */