# Write your MySQL query statement below
select     Students.student_id,
    Students.student_name,
    Subjects.subject_name,
    COUNT(Examinations.subject_name) AS attended_exams
    from Students 
    join Subjects
left join Examinations 
 on Students.student_id = Examinations.student_id
AND Subjects.subject_name = Examinations.subject_name
GROUP BY Students.student_id, Subjects.subject_name
ORDER BY student_id ASC, subject_name ASC