const dfs = (isConnected, visited, provinces, i) => {
  for (let j = 0; j < provinces; j++) {
    if (isConnected[i][j] == 1 && !(j in visited)) {
      visited[j] = void 0;
      dfs(isConnected, visited, provinces, j);
    }
  }
};
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = (isConnected) => {
  const provinces = isConnected.length;
  const visited = {};
  let circles = 0;
  for (let i = 0; i < provinces; i++) {
    if (!(i in visited)) {
      dfs(isConnected, visited, provinces, i);
      circles++;
    }
  }
  return circles;
};
