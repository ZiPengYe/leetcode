const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const dfs = (board, now, i, j, ans) => {
  const char = board[i][j]
  if (!now.children.has(char)) return;

  let next = now.children.get(char);
  if (next.word) {
    ans.add(next.word)
    next.word = ''
  }

  if (next.children.size) {
    board[i][j] = '#'
    for (const [x, y] of DIRS) {
      const i1 = i + x, j1 = j + y;
      if (
        i1 >= 0 &&
        i1 < board.length &&
        j1 >= 0 &&
        j1 < board[0].length
      ) {
        dfs(board, next, i1, j1, ans);
      }
    }
    board[i][j] = char;
  }

  if (!next.children.size) {
    now.children.delete(char);
  }
};
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  const ans = new Set();
  const m = board.length;
  const n = board[0].length;
  for (let i = 0 ; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      dfs(board, trie, i, j, ans);
    }
  }

  return Array.from(ans.values());
};

class Trie {
  constructor() {
    this.word = '';
    this.children = new Map();
  }

  insert(word) {
    let cur = this;
    for (const char of word) {
      if (!cur.children.has(char)) {
        cur.children.set(char, new Trie());
      }
      cur = cur.children.get(char);
    }
    cur.word = word;
  }
}
