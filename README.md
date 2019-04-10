[leetcode]: https://leetcode.com/problemset/all/
[leetcode-cn]: https://leetcode-cn.com/problemset/all/

# <a id="top"></a> [LeetCode Problems][leetcode]([力扣 题库][leetcode-cn])

## menu(目录)
- [x] [#1 Two Sum(两数之和)](#1)
- [x] [#2 Add Two Numbers(两数相加)](#2)
- [x] [#3 Longest Substring Without Repeating Characters(无重复字符的最长子串)](#3)
- [x] [#4 Median of Two Sorted Arrays(寻找两个有序数组的中位数)](#4)
- [x] [#5 Longest Palindromic Substring(最长回文子串)](#5)
- [X] [#6 ZigZag Conversion](#6)
- [ ] [#224 Basic Calculator](#224)
---

## <a id="1"></a> #1 Two Sum(两数之和)
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

## <a id="2"></a> #2 Add Two Numbers(两数相加)
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

## <a id="3"></a> #3 Longest Substring Without Repeating Characters(无重复字符的最长子串)
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

## <a id="4"></a> #4 Median of Two Sorted Arrays(寻找两个有序数组的中位数)
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

## <a id="5"></a> #5 Longest Palindromic Substring(最长回文子串)
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

## <a id="6"></a> #6 ZigZag Conversion(Z 字形变换)
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

---

## <a id="224"></a> #224 Basic Calculator(基本计算器)

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
**Note:**
- You may assume that the given expression is always valid.
- (你可以假设所给定的表达式都是有效的。)
- **Do not** use the `eval` built-in library function.
- (请 **不要** 使用内置的库函数 `eval`。)
