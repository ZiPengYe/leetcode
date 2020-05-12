/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor, oldColor) => {
  if (typeof oldColor === 'undefined') {
    if (newColor === image[sr][sc]) return image;
    oldColor = image[sr][sc];
  }
  if (image[sr][sc] === oldColor) {
    image[sr][sc] = newColor;
    if (sr) floodFill(image, sr - 1, sc, newColor, oldColor);
    if (sc) floodFill(image, sr, sc - 1, newColor, oldColor);
    if (image.length - sr > 1) floodFill(image, sr + 1, sc, newColor, oldColor);
    if (image[0].length - sc > 1) floodFill(image, sr, sc + 1, newColor, oldColor);
  }
  return image;
};
