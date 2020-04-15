# Write your MySQL query statement below
DELETE FROM Person WHERE Id NOT IN (
  SELECT * FROM (
    SELECT min(t1.Id) FROM Person t1, (
      SELECT DISTINCT Email FROM Person
    ) t2 WHERE t1.Email = t2.Email GROUP BY t1.Email
  ) t
);