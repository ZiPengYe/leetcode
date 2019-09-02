/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    return strs.slice(1).reduce((acc, cur, idx, src) => {
        if(acc === '') return '';
        // 拿最短的长度, 逐减
        for(let len = Math.min(acc.length, cur.length); len > 0; len --) {
            // 前缀 比较
            const prefix = acc.substring(0, len);
            if(cur.substring(0, len) === prefix) return prefix;
        }
        return '';
    }, strs[0]);
};