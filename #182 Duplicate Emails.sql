# Write your MySQL query statement below
SELECT Email
FROM (
  SELECT Email, count(Email) as c
  FROM Person
  GROUP BY Email
) as t
WHERE t.c > 1