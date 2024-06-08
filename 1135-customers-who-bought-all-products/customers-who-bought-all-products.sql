SELECT customer_id
 FROM customer c
  GROUP BY customer_id
   HAVING count(distinct product_key)=(SELECT count(distinct product_key) 
    FROM product)