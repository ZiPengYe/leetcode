/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  // 归并排序
  const arr = merge(nums1, nums2);
  // 数组长度
  const len = arr.length;
  // 中间下标
  const mid = Math.floor(len / 2);
  // 如果 数组为 奇数 则 返回中位数, 如果是 偶数 则返回 俩中位数的平均数
  return len % 2 ?
    arr[mid] :
    (arr[mid]+arr[mid-1])/2
};

// 归并排序 https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F#Javascript
function merge(left, right){
  var result = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}