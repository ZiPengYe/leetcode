# Write your MySQL query statement below
SELECT w.Id
FROM Weather w
INNER JOIN Weather w1
ON w1.RecordDate = DATE_SUB(w.RecordDate, INTERVAL 1 DAY)
WHERE w.Temperature > w1.Temperature;