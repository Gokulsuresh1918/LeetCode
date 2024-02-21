# Write your MySQL query statement below
select a.unique_id  as unique_id,b.name as name 
 from Employees b left join EmployeeUNI a on a.id=b.id
