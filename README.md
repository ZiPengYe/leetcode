[leetcode]: https://leetcode.com/problemset/all/
[leetcode-cn]: https://leetcode-cn.com/problemset/all/

# <a id="top"></a> [LeetCode Problems][leetcode]([力扣 题库][leetcode-cn])

## menu(目录)
- [x] [#1 Two Sum(两数之和)](#1)
- [x] [#2 Add Two Numbers(两数相加)](#2)
- [x] [#3 Longest Substring Without Repeating Characters(无重复字符的最长子串)](#3)
- [x] [#4 Median of Two Sorted Arrays(寻找两个有序数组的中位数)](#4)
- [x] [#5 Longest Palindromic Substring(最长回文子串)](#5)
- [x] [#6 ZigZag Conversion(Z 字形变换)](#6)
- [x] [#7 Reverse Integer(整数反转)](#7)
- [x] [#9 Palindrome Number(回文数)](#9)
- [x] [#13 Roman to Integer(罗马数字转整数)](#13)
- [x] [#14 Longest Common Prefix(最长公共前缀)](#14)
- [x] [#20 Valid Parentheses(有效的括号)](#20)
- [x] [#21 Merge Two Sorted Lists(合并两个有序链表)](#21)
- [x] [#26 Remove Duplicates from Sorted Array(删除排序数组中的重复项)](#26)
- [x] [#27 Remove Element(移除元素)](#27)
- [x] [#28 Implement strStr()(实现 strStr())](#28)
- [x] [#35 Search Insert Position(搜索插入位置)](#35)
- [x] [#38 Count and Say(外观数列)](#38)
- [x] [#66 Plus One(加一)](#66)
- [x] [#88 Merge Sorted Array(合并两个有序数组)](#88)
- [x] [#224 Basic Calculator(基本计算器)](#224)
- [x] [#300 Longest Increasing Subsequence(最长上升子序列)](#300)
- [x] [#434 Number of Segments in a String(字符串中的单词数)](#434)
- [x] [#467 Unique Substrings in Wraparound String(环绕字符串中唯一的子字符串)](#467)
- [x] [#747 Largest Number At Least Twice of Others(至少是其他数字两倍的最大数)](#747)
- [x] [#869 Reordered Power of 2(重新排序得到 2 的幂)](#869)
- [x] [#992 Subarrays with K Different Integers(K 个不同整数的子数组)](#992)
- [ ] [#1024 Video Stitching](#1024)

---

## <a id="1">#1</a> Two Sum(两数之和)
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

(给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。)

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

(你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。)

**Example(示例):**
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
[back to top(回到顶部)](#top)

---

## <a id="2">#2</a> Add Two Numbers(两数相加)
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

(给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。)

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

(您可以假设除了数字 0 之外，这两个数都不会以 0 开头。)

**Example(示例):**
```
Input(输入): (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output(输出): 7 -> 0 -> 8
Explanation(原因): 342 + 465 = 807.
```
[back to top(回到顶部)](#top)

---

## <a id="3">#3</a> Longest Substring Without Repeating Characters(无重复字符的最长子串)
Given a string, find the length of the **longest substring** without repeating characters.

(给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。)

**Example(示例) 1:**
```
Input(输入): "abcabcbb"
Output(输出): 3
Explanation(解释): The answer is "abc", with the length of 3.
```
**Example(示例) 2:**
```
Input(输入): "bbbbb"
Output(输出): 1
Explanation(解释): The answer is "b", with the length of 1.
```
**Example(示例) 3:**
```
Input(输入): "pwwkew"
Output(输出): 3
Explanation(解释): The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
[back to top(回到顶部)](#top)

---

## <a id="4">#4</a> Median of Two Sorted Arrays(寻找两个有序数组的中位数)
There are two sorted arrays **nums1** and **nums2** of size m and n respectively.

(给定两个大小为 m 和 n 的有序数组 `nums1` 和 `nums2`。)

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

(请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。)

You may assume **nums1** and **nums2** cannot be both empty.

(你可以假设 `nums1` 和 `nums2` 不会同时为空。)

**Example(示例) 1:**
```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```
**Example(示例) 2:**
```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```
[back to top(回到顶部)](#top)

---

## <a id="5">#5</a> Longest Palindromic Substring(最长回文子串)
Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

(给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。)

**Example(示例) 1:**
```
Input(输入): "babad"
Output(输出): "bab"
Note(注意): "aba" is also a valid answer.
```
**Example(示例) 2:**
```
Input(输入): "cbbd"
Output(输出): "bb"
```
[back to top(回到顶部)](#top)

---

## <a id="6">#6</a> ZigZag Conversion(Z 字形变换)
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

(比如输入字符串为 `"PAYPALISHIRING"` 行数为 3 时，排列如下：)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

(之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"PAHNAPLSIIGYIR"`。)

Write the code that will take a string and make this conversion given a number of rows:

(请你实现这个将字符串进行指定行数变换的函数：)

```c
string convert(string s, int numRows);
```

**Example(示例) 1:**
```
Input(输入): s = "PAYPALISHIRING", numRows = 3
Output(输出): "PAHNAPLSIIGYIR"
```
**Example(示例) 2:**
```
Input(输入): s = "PAYPALISHIRING", numRows = 4
Output(输出): "PINALSIGYAHRPI"
Explanation(解释):

P     I     N
A   L S   I G
Y A   H R
P     I
```
[back to top(回到顶部)](#top)

---

## <a id="7">#7</a> Reverse Integer(整数反转)
Given a 32-bit signed integer, reverse digits of an integer.

(给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。)

**Example(示例) 1:**
```
Input(输入): 123
Output(输出): 321
```
**Example(示例) 2:**
```
Input(输入): -123
Output(输出): -321
```
**Example(示例) 3:**
```
Input(输入): 120
Output(输出): 21
```
**Note(说明):**
- Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^(31),  2^(31) − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
(假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^(31),  2^(31) − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。)

[back to top(回到顶部)](#top)

---

## <a id="9">#9</a> Palindrome Number(回文数)
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

(判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。)

**Example(示例) 1:**
```
Input(输入): 121
Output(输出): true
```
**Example(示例) 2:**
```
Input(输入): -121
Output(输出): false
Explanation(解释): From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```
**Example(示例) 3:**
```
Input(输入): 10
Output(输出): false
Explanation(解释): Reads 01 from right to left. Therefore it is not a palindrome.
```
**Follow up(进阶):**

Coud you solve it without converting the integer to a string?

(你能不将整数转为字符串来解决这个问题吗？)

[back to top(回到顶部)](#top)

---

## <a id="13">#13</a> Roman to Integer(罗马数字转整数)
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

(罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。)

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, two is written as `II` in Roman numeral, just two one's added together. Twelve is written as, `XII`, which is simply `X` + `II`. The number twenty seven is written as `XXVII`, which is `XX` + `V` + `II`.

(例如， 罗马数字 2 写做`II`，即为两个并列的 1。12 写做`XII`，即为`X`+`II`。 27 写做`XXVII`, 即为`XX`+`V`+`II`。)

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

(通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做`IIII`，而是`IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为`IX`。这个特殊的规则只适用于以下六种情况：)

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
(`I` 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。)
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
(`X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。 )
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.
(`C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。)

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

(给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。)

**Example(示例) 1:**
```
Input(输入): "III"
Output(输出): 3
```
**Example(示例) 2:**
```
Input(输入): "IV"
Output(输出): 4
```
**Example(示例) 3:**
```
Input(输入): "IX"
Output(输出): 9
```
**Example(示例) 4:**
```
Input(输入): "LVIII"
Output(输出): 58
Explanation(解释): L = 50, V= 5, III = 3.
```
**Example(示例) 5:**
```
Input(输入): "MCMXCIV"
Output(输出): 1994
Explanation(解释): M = 1000, CM = 900, XC = 90 and IV = 4.
```
[back to top(回到顶部)](#top)

---

## <a id="14">#14</a> Longest Common Prefix(最长公共前缀)
Write a function to find the longest common prefix string amongst an array of strings.

(编写一个函数来查找字符串数组中的最长公共前缀。)

If there is no common prefix, return an empty string `""`.

(如果不存在公共前缀，返回空字符串 `""`。)


**Example(示例) 1:**
```
Input(输入): ["flower","flow","flight"]
Output(输出): "fl"
```
**Example(示例) 4:**
```
Input(输入): ["dog","racecar","car"]
Output(输出): ""
Explanation(解释): There is no common prefix among the input strings.
```
**Note(说明):**
- All given inputs are in lowercase letters `a-z`.
(所有输入只包含小写字母 `a-z` 。)

[back to top(回到顶部)](#top)

---

## <a id="20">#20</a> Valid Parentheses(有效的括号)
Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

(给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效)

An input string is valid if:

(有效字符串需满足：)
  1. Open brackets must be closed by the same type of brackets.
  (左括号必须用相同类型的右括号闭合。)
  2. Open brackets must be closed in the correct order.
  (左括号必须以正确的顺序闭合。)

Note that an empty string is also considered valid.

(注意空字符串可被认为是有效字符串。)

**Example(示例) 1:**
```
Input(输入): "()"
Output(输出): true
```
**Example(示例) 2:**
```
Input(输入): "()[]{}"
Output(输出): true
```
**Example(示例) 3:**
```
Input(输入): "(]"
Output(输出): false
```
**Example(示例) 4:**
```
Input(输入): "([)]"
Output(输出): false
```
**Example(示例) 5:**
```
Input(输入): "{[]}"
Output(输出): true
```
[back to top(回到顶部)](#top)

---

## <a id="21">#21</a> Merge Two Sorted Lists(合并两个有序链表)
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

(将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。)

**Example(示例):**
```
Input(输入): 1->2->4, 1->3->4
Output(输出): 1->1->2->3->4->4
```
[back to top(回到顶部)](#top)

---

## <a id="26">#26</a> Remove Duplicates from Sorted Array(删除排序数组中的重复项)
Given a sorted array nums, remove the duplicates [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) such that each element appear only once and return the new length.

(给定一个排序数组，你需要在[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。)

Do not allocate extra space for another array, you must do this by **modifying the input array** [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

(不要使用额外的数组空间，你必须在[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)**修改输入数组**并在使用 O(1) 额外空间的条件下完成。)


**Example(示例) 1:**
```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```
**Example(示例) 2:**
```
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```
**Clarification(说明):**

Confused why the returned value is an integer but your answer is an array?

(为什么返回数值是整数，但输出的答案是数组呢?)

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

(请注意，输入数组是以“**引用**”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。)

Internally you can think of this:

(你可以想象内部操作如下:)
```cpp
// nums is passed in by reference. (i.e., without making a copy)
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeElement(nums);

// any modification to nums in your function would be known by the caller.
// 在函数里修改输入数组对于调用者是可见的
// using the length returned by your function, it prints the first len elements.
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```
[back to top(回到顶部)](#top)

---

## <a id="27">#27</a> Remove Element(移除元素)
Given an array nums and a value val, remove all instances of that value [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) and return the new length.

(给定一个数组 *nums* 和一个值 *val*，你需要[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)移除所有数值等于 *val* 的元素，返回移除后数组的新长度。)

Do not allocate extra space for another array, you must do this by **modifying the input array** [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

(不要使用额外的数组空间，你必须在[原地](http://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)**修改输入数组**并在使用 O(1) 额外空间的条件下完成。)


**Example(示例) 1:**
```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```
**Example(示例) 2:**
```
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
```
**Clarification(说明):**

Confused why the returned value is an integer but your answer is an array?

(为什么返回数值是整数，但输出的答案是数组呢?)

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

(请注意，输入数组是以“**引用**”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。)

Internally you can think of this:

(你可以想象内部操作如下:)
```cpp
// nums is passed in by reference. (i.e., without making a copy)
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// 在函数里修改输入数组对于调用者是可见的
// using the length returned by your function, it prints the first len elements.
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```
[back to top(回到顶部)](#top)

---

## <a id="28">#28</a> Implement strStr()(实现 strStr())
Implement [strStr()](http://www.cplusplus.com/reference/cstring/strstr/).

(实现 [strStr()](https://baike.baidu.com/item/strstr/811469) 函数。)

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

(给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回 **-1**。)


**Example(示例) 1:**
```
Input(输入): haystack = "hello", needle = "ll"
Output(输出): 2
```
**Example(示例) 2:**
```
Input(输入): haystack = "aaaaa", needle = "bba"
Output(输出): -1
```
**Clarification(说明):**

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

(当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。)

For the purpose of this problem, we will return 0 when `needle` is an empty string. This is consistent to C's [strstr()](http://www.cplusplus.com/reference/cstring/strstr/) and Java's [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)).

(对于本题而言，当 `needle` 是空字符串时我们应当返回 0 。这与C语言的 [strstr()](https://baike.baidu.com/item/strstr/811469) 以及 Java的 [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)) 定义相符。)

[back to top(回到顶部)](#top)

---
## <a id="35">#35</a> Search Insert Position(搜索插入位置)
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

(给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。)

You may assume no duplicates in the array.

(你可以假设数组中无重复元素。)


**Example(示例) 1:**
```
Input(输入): [1,3,5,6], 5
Output(输出): 2
```
**Example(示例) 2:**
```
Input(输入): [1,3,5,6], 2
Output(输出): 1
```
**Example(示例) 3:**
```
Input(输入): [1,3,5,6], 7
Output(输出): 4
```
**Example(示例) 4:**
```
Input(输入): [1,3,5,6], 0
Output(输出): 0
```
[back to top(回到顶部)](#top)

---
## <a id="38">#38</a> Count and Say(外观数列)]
The count-and-say sequence is the sequence of integers with the first five terms as following:

(「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：)
```
1.      1
2.      11
3.      21
4.      1211
5.      111221
```
`1` is read off as `"one 1"` or `11`.

(`1` 被读作  `"one 1"`  (`"一个一"`) , 即 `11`。)

`11` is read off as `"two 1s"` or `21`.

(`11` 被读作 `"two 1s"` (`"两个一"`）, 即 `21`。)

`21` is read off as `"one 2`, then `one 1"` or `1211`.

(`21` 被读作 `"one 2"`,  `"one 1"` （`"一个二"` ,  `"一个一"`) , 即 `1211`。)

Given an integer *n* where 1 ≤ *n* ≤ 30, generate the *n*th term of the count-and-say sequence.

(给定一个正整数 *n*（1 ≤ *n* ≤ 30），输出外观数列的第 *n* 项。)

You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.


Note: Each term of the sequence of integers will be represented as a string.

(注意：整数序列中的每一项将表示为一个字符串。)
**Example(示例) 1:**
```
Input(输入): 1
Output(输出): "1"
Explanation(解释): This is the base case.
```
**Example(示例) 2:**
```
Input(输入): 4
Output(输出): "1211"
Explanation(解释): For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
```
[back to top(回到顶部)](#top)

---

## <a id="66">#66</a> Plus One(加一)
Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

(给定一个由 **整数** 组成的 **非空** 数组所表示的非负整数，在该数的基础上加一。)

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

(最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。)

You may assume the integer does not contain any leading zero, except the number 0 itself.

(你可以假设除了整数 0 之外，这个整数不会以零开头。)

**Example(示例) 1:**
```
Input(输入): [1,2,3]
Output(输出): [1,2,4]
Explanation(解释): The array represents the integer 123.
```
**Example(示例) 2:**
```
Input(输入): [4,3,2,1]
Output(输出): [4,3,2,2]
Explanation(解释): The array represents the integer 4321.
```
[back to top(回到顶部)](#top)

---

## <a id="88">#88</a> Merge Sorted Array(合并两个有序数组)
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

(给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。)

**Note(说明):**
- The number of elements initialized in nums1 and nums2 are m and n respectively.
(初始化 nums1 和 nums2 的元素数量分别为 m 和 n。)
- You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
(你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。)

**Example(示例):**
```
Input(输入):
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
Output(输出): [1,2,2,3,5,6]
```
[back to top(回到顶部)](#top)

---

## <a id="224">#224</a> Basic Calculator(基本计算器)
Implement a basic calculator to evaluate a simple expression string.

(实现一个基本的计算器来计算一个简单的字符串表达式的值。)

The expression string may contain open `(` and closing parentheses `)`, the plus `+` or minus sign `-`, **non-negative** integers and empty spaces` `.

(字符串表达式可以包含左括号 `(` ，右括号 `)`，加号 `+` ，减号 `-`，**非负** 整数和空格`  `。)

**Example(示例) 1:**
```
Input(输入): "1 + 1"
Output(输出): 2
```
**Example(示例) 2:**
```
Input(输入): " 2-1 + 2 "
Output(输出): 3
```
**Example(示例) 3:**
```
Input(输入): "(1+(4+5+2)-3)+(6+8)"
Output(输出): 23
```
**Note(说明):**
- You may assume that the given expression is always valid.
- (你可以假设所给定的表达式都是有效的。)
- **Do not** use the `eval` built-in library function.
- (请 **不要** 使用内置的库函数 `eval`。)

[back to top(回到顶部)](#top)

---

## <a id="300">#300</a> Longest Increasing Subsequence(最长上升子序列)
Given an unsorted array of integers, find the length of longest increasing subsequence.

(给定一个无序的整数数组，找到其中最长上升子序列的长度。)

**Example(示例):**
```
Input(输入): [10,9,2,5,3,7,101,18]
Output(输出): 4
Explanation(解释): The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```
**Note(说明):**
- There may be more than one LIS combination, it is only necessary for you to return the length.
(可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。)
- Your algorithm should run in O(n2) complexity.
(你算法的时间复杂度应该为 O(n2) 。)

**Follow up(进阶)**: Could you improve it to O(n log n) time complexity?
(你能将算法的时间复杂度降低到 O(n log n) 吗?)

[back to top(回到顶部)](#top)

---

## <a id="434">#434</a> Number of Segments in a String(字符串中的单词数)
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of **non-space** characters.

(统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。)

Please note that the string does not contain any non-printable characters.

(请注意，你可以假定字符串里不包括任何不可打印的字符。)

**Example(示例):**
```
Input(输入): "Hello, my name is John"
Output(输出): 5
```
[back to top(回到顶部)](#top)

---

## <a id="467">#467</a> Unique Substrings in Wraparound String(环绕字符串中唯一的子字符串)
Consider the string `s` to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so `s` will look like this:

(把字符串 `s` 看作是“abcdefghijklmnopqrstuvwxyz”的无限环绕字符串，所以 `s` 看起来是这样的：)

"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

Now we have another string `p`. Your job is to find out how many unique non-empty substrings of `p` are present in `s`. In particular, your input is the string `p` and you need to output the number of different non-empty substrings of `p` in the string `s`.

(现在我们有了另一个字符串 `p` 。你需要的是找出 `s` 中有多少个唯一的 `p` 的非空子串，尤其是当你的输入是字符串 `p` ，你需要输出字符串 `s` 中 `p` 的不同的非空子串的数目。 )

Note: `p` consists of only lowercase English letters and the size of p might be over 10000.

(注意: `p` 仅由小写的英文字母组成，p 的大小可能超过 10000。)

**Example(示例) 1:**
```
Input(输入): "a"
Output(输出): 1
Explanation(解释): Only the substring "a" of string "a" is in the string s.
```
**Example(示例) 2:**
```
Input(输入): "cac"
Output(输出): 2
Explanation(解释): There are two substrings "a", "c" of string "cac" in the string s.
```
**Example(示例) 3:**
```
Input(输入): "zab"
Output(输出): 6
Explanation(解释): There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
```
[back to top(回到顶部)](#top)

---

## <a id="747">#747</a> Largest Number At Least Twice of Others(至少是其他数字两倍的最大数)
In a given integer array `nums`, there is always exactly one largest element.

(在一个给定的数组`nums`中，总是存在一个最大元素 。)

Find whether the largest element in the array is at least twice as much as every other number in the array.

(查找数组中的最大元素是否至少是数组中每个其他数字的两倍。)

If it is, return the **index** of the largest element, otherwise return -1.

(如果是，则返回最大元素的索引，否则返回-1。)

**Example(示例) 1:**
```
Input(输入): nums = [3, 6, 1, 0]
Output(输出): 1
Explanation(解释): 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
```
**Example(示例) 2:**
```
Input(输入): nums = [1, 2, 3, 4]
Output(输出): -1
Explanation(解释): 4 isn't at least as big as twice the value of 3, so we return -1.
```
**Note(提示):**
1. `nums` will have a length in the range `[1, 50]`.

  (`nums` 的长度范围在`[1, 50]`.)
2. Every `nums[i]` will be an integer in the range `[0, 99]`.

  (每个 `nums[i]` 的整数范围在 `[0, 99]`.)

[back to top(回到顶部)](#top)

---

## <a id="869">#869</a> Reordered Power of 2(重新排序得到 2 的幂)
Starting with a positive integer `N`, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

(从正整数 `N` 开始，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。)

Return `true` if and only if we can do this in a way such that the resulting number is a power of 2.

(如果我们可以通过上述方式得到 2 的幂，返回 `true`；否则，返回 `false`。)

**Example(示例) 1:**
```
Input(输入): 1
Output(输出): true
```
**Example(示例) 2:**
```
Input(输入): 10
Output(输出): false
```
**Example(示例) 3:**
```
Input(输入): 16
Output(输出): true
```
**Example(示例) 4:**
```
Input(输入): 24
Output(输出): false
```
**Example(示例) 5:**
```
Input(输入): 46
Output(输出): true
```
**Note(提示):**
1. `1 <= N <= 10^9`

[back to top(回到顶部)](#top)

---

## <a id="992">#992</a> Subarrays with K Different Integers(K 个不同整数的子数组)
Given an array `A` of positive integers, call a (contiguous, not necessarily distinct) subarray of `A` good if the number of different integers in that subarray is exactly `K`.

(给定一个正整数数组 `A`，如果 `A` 的某个子数组中不同整数的个数恰好为 `K`，则称 `A` 的这个连续、不一定独立的子数组为好子数组。)

(For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.)

(例如，`[1,2,3,1,2]` 中有 `3` 个不同的整数：`1`，`2`，以及 `3`。)

Return the number of good subarrays of `A`.

(返回 `A` 中好子数组的数目。)

**Example(示例) 1:**
```
Input(输入): A = [1,2,1,2,3], K = 2
Output(输出): 7
Explanation(解释): Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
```
**Example(示例) 2:**
```
Input(输入): A = [1,2,1,3,4], K = 3
Output(输出): 3
Explanation(解释): Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
```
**Note(提示):**
1. `1 <= A.length <= 20000`
2. `1 <= A[i] <= A.length`
3. `1 <= K <= A.length`

[back to top(回到顶部)](#top)
---

## <a id="1024">#1024</a> Video Stitching
You are given a series of video clips from a sporting event that lasted T seconds.  These video clips can be overlapping with each other and have varied lengths.

Each video clip clips[i] is an interval: it starts at time clips[i][0] and ends at time clips[i][1].  We can cut these clips into segments freely: for example, a clip [0, 7] can be cut into segments [0, 1] + [1, 3] + [3, 7].

Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event ([0, T]).  If the task is impossible, return -1.

**Example(示例) 1:**
```
Input(输入): clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
Output(输出): 3
Explanation(解释):
We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
Then, we can reconstruct the sporting event as follows:
We cut [1,9] into segments [1,2] + [2,8] + [8,9].
Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].
```
**Example(示例) 2:**
```
Input(输入): clips = [[0,1],[1,2]], T = 5
Output(输出): -1
Explanation(解释):
We can't cover [0,5] with only [0,1] and [0,2].
```
**Example(示例) 3:**
```
Input(输入): clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9
Output(输出): 3
Explanation(解释):
We can take clips [0,4], [4,7], and [6,9].
```
**Example(示例) 4:**
```
Input(输入): clips = [[0,4],[2,8]], T = 5
Output(输出): 2
Explanation(解释):
Notice you can have extra video after the event ends.
```
**Note(提示):**
1. `1 <= clips.length <= 100`
2. `0 <= clips[i][0], clips[i][1] <= 100`
3. `0 <= T <= 100`

[back to top(回到顶部)](#top)
