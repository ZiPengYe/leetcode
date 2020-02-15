# [menu](https://leetcode.com/problemset/all/)
- [x] [#1 Two Sum](#1-two-sum)
- [x] [#2 Add Two Numbers](#2-add-two-numbers)
- [x] [#3 Longest Substring Without Repeating Characters](#3-longest-substring-without-repeating-characters)
- [x] [#4 Median of Two Sorted Arrays](#4-median-of-two-sorted-arrays)
- [x] [#5 Longest Palindromic Substring](#5-longest-palindromic-substring)
- [x] [#6 ZigZag Conversion](#6-zigzag-conversion)
- [x] [#7 Reverse Integer](#7-reverse-integer)
- [x] [#9 Palindrome Number](#9-palindrome-number)
- [x] [#13 Roman to Integer](#13-roman-to-integer)
- [x] [#14 Longest Common Prefix](#14-longest-common-prefix)
- [x] [#20 Valid Parentheses](#20-valid-parentheses)
- [x] [#21 Merge Two Sorted Lists](#21-merge-two-sorted-lists)
- [x] [#26 Remove Duplicates from Sorted Array](#26-remove-duplicates-from-sorted-array)
- [x] [#27 Remove Element](#27-remove-element)
- [x] [#28 Implement strStr()](#28-implement-strstr)
- [x] [#35 Search Insert Position](#35-search-insert-position)
- [x] [#38 Count and Say](#38-count-and-say)
- [x] [#53 Maximum Subarray](#53-maximum-subarray)
- [x] [#58 Length of Last Word](#58-length-of-last-word)
- [x] [#66 Plus One](#66-plus-one)
- [x] [#67 Add Binary](#67-add-binary)
- [x] [#69 Sqrt(x)](#69-sqrtx)
- [x] [#70 Climbing Stairs](#70-climbing-stairs)
- [x] [#83 Remove Duplicates from Sorted List](#83-remove-duplicates-from-sorted-list)
- [x] [#88 Merge Sorted Array](#88-merge-sorted-array)
- [x] [#100 Same Tree](#100-same-tree)
- [x] [#101 Symmetric Tree](#101-symmetric-tree)
- [x] [#104 Maximum Depth of Binary Tree](#104-maximum-depth-of-binary-tree)
- [x] [#107 Binary Tree Level Order Traversal II](#107-binary-tree-level-order-traversal-ii)
- [x] [#108 Convert Sorted Array to Binary Search Tree](#108-convert-sorted-array-to-binary-search-tree)
- [x] [#110 Balanced Binary Tree](#110-balanced-binary-tree)
- [x] [#111 Minimum Depth of Binary Tree](#111-minimum-depth-of-binary-tree)
- [x] [#112 Path Sum](#112-path-sum)
- [x] [#118 Pascal's Triangle](#118-pascal-s-triangle)
- [x] [#224 Basic Calculator](#224-basic-calculator)
- [x] [#300 Longest Increasing Subsequence](#300-longest-increasing-subsequence)
- [x] [#434 Number of Segments in a String](#434-number-of-segments-in-a-string)
- [x] [#467 Unique Substrings in Wraparound String](#467-unique-substrings-in-wraparound-string)
- [x] [#747 Largest Number At Least Twice of Others](#747-largest-number-at-least-twice-of-others)
- [x] [#869 Reordered Power of 2](#869-reordered-power-of-2)
- [x] [#992 Subarrays with K Different Integers](#992-subarrays-with-k-different-integers)
- [ ] [#1024 Video Stitching](#1024-video-stitching)
---
## [#1 Two Sum](https://leetcode.com/problems/two-sum)
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the same element twice.

**Example:**
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
[back to top](#menu)

---
## [#2 Add Two Numbers](https://leetcode.com/problems/add-two-numbers)
You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example:**
```
Input
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```
[back to top](#menu)

---
## [#3 Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)
Given a string, find the length of the **longest substring** without repeating characters.

**Example 1:**
```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```
**Example 2:**
```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
**Example 3:**
```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
[back to top](#menu)

---
## [#4 Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays)
There are two sorted arrays **nums1** and **nums2** of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume **nums1** and **nums2** cannot be both empty.

**Example 1:**
```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```
**Example 2:**
```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```
[back to top](#menu)

---
## [#5 Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring)
Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

**Example 1:**
```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```
**Example 2:**
```
Input: "cbbd"
Output: "bb"
```
[back to top](#menu)

---
## [#6 ZigZag Conversion](https://leetcode.com/problems/zigzag-conversion)
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:
```c
string convert(string s, int numRows);
```
**Example 1:**
```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```
**Example 2:**
```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I     N
A   L S   I G
Y A   H R
P     I
```
[back to top](#menu)

---
## [#7 Reverse Integer](https://leetcode.com/problems/reverse-integer)
Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**
```
Input: 123
Output: 321
```
**Example 2:**
```
Input: -123
Output: -321
```
**Example 3:**
```
Input: 120
Output: 21
```
**Note:**
- Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^(31),  2^(31) − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

[back to top](#menu)

---
## [#9 Palindrome Number](https://leetcode.com/problems/palindrome-number)
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**Example 1:**
```
Input: 121
Output: true
```
**Example 2:**
```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```
**Example 3:**
```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```
**Follow up:**

Coud you solve it without converting the integer to a string?

[back to top](#menu)

---
## [#13 Roman to Integer](https://leetcode.com/problems/roman-to-integer)
Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.
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

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:
- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

**Example 1:**
```
Input: "III"
Output: 3
```
**Example 2:**
```
Input: "IV"
Output: 4
```
**Example 3:**
```
Input: "IX"
Output: 9
```
**Example 4:**
```
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```
**Example 5:**
```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```
[back to top](#menu)

---
## [#14 Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**
```
Input: ["flower","flow","flight"]
Output: "fl"
```
**Example 4:**
```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
**Note:**
- All given inputs are in lowercase letters `a-z`.

[back to top](#menu)

---
## [#20 Valid Parentheses](https://leetcode.com/problems/valid-parentheses)
Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

**Example 1:**
```
Input: "()"
Output: true
```
**Example 2:**
```
Input: "()[]{}"
Output: true
```
**Example 3:**
```
Input: "(]"
Output: false
```
**Example 4:**
```
Input: "([)]"
Output: false
```
**Example 5:**
```
Input: "{[]}"
Output: true
```
[back to top](#menu)

---
## [#21 Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists)
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

**Example:**
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
[back to top](#menu)

---
## [#26 Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array)
Given a sorted array nums, remove the duplicates [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

**Example 1:**
```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```
**Example 2:**
```
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```
**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:
```cpp
// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```
[back to top](#menu)

---
## [#27 Remove Element](https://leetcode.com/problems/remove-element)
Given an array nums and a value val, remove all instances of that value [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

**Example 1:**
```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```
**Example 2:**
```
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
```
**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:
```cpp
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```
[back to top](#menu)

---
## [#28 Implement strStr()](https://leetcode.com/problems/implement-strstr)
Implement [strStr()](http://www.cplusplus.com/reference/cstring/strstr/).

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
**Example 1:**
```
Input: haystack = "hello", needle = "ll"
Output: 2
```
**Example 2:**
```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```
**Clarification:**

What should we return when `needle` is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when `needle` is an empty string. This is consistent to C's [strstr()](http://www.cplusplus.com/reference/cstring/strstr/) and Java's [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)).

[back to top](#menu)

---
## [#35 Search Insert Position](https://leetcode.com/problems/search-insert-position)
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

**Example 1:**
```
Input: [1,3,5,6], 5
Output: 2
```
**Example 2:**
```
Input: [1,3,5,6], 2
Output: 1
```
**Example 3:**
```
Input: [1,3,5,6], 7
Output: 4
```
**Example 4:**
```
Input: [1,3,5,6], 0
Output: 0
```
[back to top](#menu)

---
## [#38 Count and Say](https://leetcode.com/problems/count-and-say)
The count-and-say sequence is the sequence of integers with the first five terms as following:
```
1.      1
2.      11
3.      21
4.      1211
5.      111221
```
`1` is read off as `"one 1"` or `11`.

`11` is read off as `"two 1s"` or `21`.

`21` is read off as `"one 2`, then `one 1"` or `1211`.

Given an integer *n* where 1 ≤ *n* ≤ 30, generate the *n*th term of the count-and-say sequence.

You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

**Example 1:**
```
Input: 1
Output: "1"
Explanation: This is the base case.
```
**Example 2:**
```
Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
```
[back to top](#menu)

---
## [#53 Maximum Subarray](https://leetcode.com/problems/maximum-subarray)
Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example :**
```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```
**Follow up:**

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

[back to top](#menu)

---
## [#58 Length of Last Word](https://leetcode.com/problems/length-of-last-word)
Given a string s consists of upper/lower-case alphabets and empty space characters `' '`,return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

**Note:**
A word is defined as a **maximal substring** consisting of non-space characters only.

**Example :**
```
Input: "Hello World"
Output: 5
```
[back to top](#menu)

---
## [#66 Plus One](https://leetcode.com/problems/plus-one)
Given a **non-empty** array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**
```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```
**Example 2:**
```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```
[back to top](#menu)

---
## [#67 Add Binary](https://leetcode.com/problems/add-binary)
Given two binary strings, return their sum (also a binary string).

The input strings are both **non-empty** and contains only characters `1` or `0`.

**Example 1:**
```
Input: a = "11", b = "1"
Output: "100"
```
**Example 2:**
```
Input: a = "1010", b = "1011"
Output: "10101"
```
[back to top](#menu)

---
## [#69 Sqrt(x)](https://leetcode.com/problems/sqrtx)
Implement `int sqrt(int x)`.

Compute and return the square root of *x*, where *x* is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**
```
Input: 4
Output: 2
```
**Example 2:**
```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```
[back to top](#menu)

---
## #70 Climbing Stairs
You are climbing a stair case. It takes *n* steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given *n* will be a positive integer.

**Example 1:**
```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
**Example 2:**
```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
[back to top](#menu)

---
## [#83 Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list)
Given a sorted linked list, delete all duplicates such that each element appear only *once*.

**Example 1:**
```
Input: 1->1->2
Output: 1->2
```
**Example 2:**
```
Input: 1->1->2->3->3
Output: 1->2->3
```
[back to top](#menu)

---
## [#88 Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array)
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

**Note:**
- The number of elements initialized in nums1 and nums2 are m and n respectively.
- You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

**Example:**
```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
Output: [1,2,2,3,5,6]
```
[back to top](#menu)

---
## [#100 Same Tree](https://leetcode.com/problems/same-tree)
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

**Example 1:**
```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```
**Example 2:**
```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```
**Example 3:**
```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```
[back to top](#menu)

---
## [#101 Symmetric Tree](https://leetcode.com/problems/symmetric-tree)
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree `[1,2,2,3,4,4,3]` is symmetric:
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
But the following `[1,2,2,null,3,null,3]` is not:
```
    1
   / \
  2   2
   \   \
   3    3
```
**Note:**

Bonus points if you could solve it both recursively and iteratively.

[back to top](#menu)

---
## [#104 Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note:** A leaf is a node with no children.

**Example 1:**

Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its depth = 3.

[back to top](#menu)

---
## [#107 Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii)
Given a binary tree, return the *bottom-up level order* traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:

Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its bottom-up level order traversal as:
```
[
  [15,7],
  [9,20],
  [3]
]
```
[back to top](#menu)

---
## [#108 Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree)
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**Example:**
```
Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
```
[back to top](#menu)

---
## [#110 Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree)
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of *every* node differ in height by no more than 1.

**Example 1:**

Given the following tree `[3,9,20,null,null,15,7]`:
```
    3
   / \
  9  20
    /  \
   15   7
```
Return true.

**Example 2:**

Given the following tree `[1,2,2,3,3,null,null,4,4]`:
```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```
Return false.

[back to top](#menu)

---
## [#111 Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree)
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,
```
    3
   / \
  9  20
    /  \
   15   7
```
return its minimum depth = 2.

[back to top](#menu)

---
## [#112 Path Sum](https://leetcode.com/problems/path-sum)
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,
```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```
return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

[back to top](#menu)

---
## [#118 Pascal's Triangle](https://leetcode.com/problems/pascals-triangle)
Given a non-negative integer *numRows*, generate the first *numRows* of Pascal's triangle.

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**
```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```
[back to top](#menu)

---
## [#224 Basic Calculator](https://leetcode.com/problems/basic-calculator)
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open `(` and closing parentheses `)`, the plus `+` or minus sign `-`, **non-negative** integers and empty spaces` `.

**Example 1:**
```
Input: "1 + 1"
Output: 2
```
**Example 2:**
```
Input: " 2-1 + 2 "
Output: 3
```
**Example 3:**
```
Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
```
**Note:**
- You may assume that the given expression is always valid.
- **Do not** use the `eval` built-in library function.

[back to top](#menu)

---
## [#300 Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence)
Given an unsorted array of integers, find the length of longest increasing subsequence.

**Example:**
```
Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```
**Note:**
- There may be more than one LIS combination, it is only necessary for you to return the length.
- Your algorithm should run in O(n2) complexity.

**Follow up**: Could you improve it to O(n log n) time complexity?

[back to top](#menu)

---
## [#434 Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string)
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of **non-space** characters.

Please note that the string does not contain any non-printable characters.

**Example:**
```
Input: "Hello, my name is John"
Output: 5
```
[back to top](#menu)

---
## [#467 Unique Substrings in Wraparound String](https://leetcode.com/problems/unique-substrings-in-wraparound-string)
Consider the string `s` to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so `s` will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

Now we have another string `p`. Your job is to find out how many unique non-empty substrings of `p` are present in `s`. In particular, your input is the string `p` and you need to output the number of different non-empty substrings of `p` in the string `s`.

Note: `p` consists of only lowercase English letters and the size of p might be over 10000.

**Example 1:**
```
Input: "a"
Output: 1
Explanation: Only the substring "a" of string "a" is in the string s.
```
**Example 2:**
```
Input: "cac"
Output: 2
Explanation: There are two substrings "a", "c" of string "cac" in the string s.
```
**Example 3:**
```
Input: "zab"
Output: 6
Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
```
[back to top](#menu)

---
## [#747 Largest Number At Least Twice of Others](https://leetcode.com/problems/largest-number-at-least-twice-of-others)
In a given integer array `nums`, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the **index** of the largest element, otherwise return -1.

**Example 1:**
```
Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
```
**Example 2:**
```
Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
```
**Note:**
1. `nums` will have a length in the range `[1, 50]`.
2. Every `nums[i]` will be an integer in the range `[0, 99]`.

[back to top](#menu)

---
## [#869 Reordered Power of 2](https://leetcode.com/problems/reordered-power-of-2)
Starting with a positive integer `N`, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return `true` if and only if we can do this in a way such that the resulting number is a power of 2.

**Example 1:**
```
Input: 1
Output: true
```
**Example 2:**
```
Input: 10
Output: false
```
**Example 3:**
```
Input: 16
Output: true
```
**Example 4:**
```
Input: 24
Output: false
```
**Example 5:**
```
Input: 46
Output: true
```
**Note:**
1. `1 <= N <= 10^9`

[back to top](#menu)

---
## [#992 Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers)
Given an array `A` of positive integers, call a (contiguous, not necessarily distinct) subarray of `A` good if the number of different integers in that subarray is exactly `K`.

(For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.)

Return the number of good subarrays of `A`.

**Example 1:**
```
Input: A = [1,2,1,2,3], K = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
```
**Example 2:**
```
Input: A = [1,2,1,3,4], K = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
```
**Note:**
1. `1 <= A.length <= 20000`
2. `1 <= A[i] <= A.length`
3. `1 <= K <= A.length`

[back to top](#menu)

---
## [#1024 Video Stitching](https://leetcode.com/problems/video-stitching)
You are given a series of video clips from a sporting event that lasted T seconds.  These video clips can be overlapping with each other and have varied lengths.

Each video clip clips[i] is an interval: it starts at time clips[i][0] and ends at time clips[i][1].  We can cut these clips into segments freely: for example, a clip [0, 7] can be cut into segments [0, 1] + [1, 3] + [3, 7].

Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event ([0, T]).  If the task is impossible, return -1.

**Example 1:**
```
Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
Output: 3
Explanation:
We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
Then, we can reconstruct the sporting event as follows:
We cut [1,9] into segments [1,2] + [2,8] + [8,9].
Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].
```
**Example 2:**
```
Input: clips = [[0,1],[1,2]], T = 5
Output: -1
Explanation:
We can't cover [0,5] with only [0,1] and [0,2].
```
**Example 3:**
```
Input: clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9
Output: 3
Explanation:
We can take clips [0,4], [4,7], and [6,9].
```
**Example 4:**
```
Input: clips = [[0,4],[2,8]], T = 5
Output: 2
Explanation:
Notice you can have extra video after the event ends.
```
**Note:**
1. `1 <= clips.length <= 100`
2. `0 <= clips[i][0], clips[i][1] <= 100`
3. `0 <= T <= 100`

[back to top](#menu)
