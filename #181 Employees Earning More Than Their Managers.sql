# Write your MySQL query statement below
SELECT Employee.Name as Employee
FROM Employee
INNER JOIN Employee as Self
ON Employee.ManagerId = Self.Id
WHERE Employee.Salary > Self.Salary