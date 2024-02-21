# Write your MySQL query statement below
select p.product_name,s.year  ,s.price
from Sales s left join Product p on S.product_id =P.product_id 