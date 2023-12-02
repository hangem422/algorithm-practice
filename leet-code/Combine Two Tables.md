# Combine Two Tables

[LeetCode 문제 링크](https://leetcode.com/problems/combine-two-tables)

```sql
# Write your MySQL query statement below
select person.firstName, person.lastName, address.city, address.state
from person left join address
on person.personId = address.personId
```
