/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
  const [r, c] = [image.length, image[0].length];
  const currColor = image[sr][sc];

  const dfs = (x, y) => {
    if (image[x][y] === currColor) {
      image[x][y] = newColor;
      for ([x1, y1] of [
        [x - 1, y], // top
        [x + 1, y], // bottom
        [x, y - 1], // left
        [x, y + 1], // right
      ]) {
        if (
          0 <= x1 && x1 < r &&
          0 <= y1 && y1 < c &&
          image[x1][y1] === currColor
        ) {
          dfs(x1, y1);
        }
      }
    }
  };

  if (currColor !== newColor) {
    dfs(sr, sc);
  }
  return image;
};
