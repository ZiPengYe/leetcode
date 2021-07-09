/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  const [m, n] = [mat.length, mat[0].length];
  const dist = Array(m);

  for (let i = 0; i < m; ++i) {
    dist[i] = Array(n);
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
      } else {
        dist[i][j] = Infinity;
      }
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }

  for (let i = m - 1; i > -1; --i) {
    for (let j = n - 1; j > -1; --j) {
      if (i + 1 < m) {
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      }
      if (j + 1 < n) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
      }
    }
  }

  return dist;
};
