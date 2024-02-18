# Write your MySQL query statement below
select name from Customer where coalesce(referee_id ,0)<>2;