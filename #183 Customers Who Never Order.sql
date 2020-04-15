# Write your MySQL query statement below
SELECT Customers.Name as Customers
FROM Customers
LEFT JOIN Orders
ON Customers.Id = Orders.CustomerId
WHERE Orders.Id IS NULL
GROUP BY Customers.Id