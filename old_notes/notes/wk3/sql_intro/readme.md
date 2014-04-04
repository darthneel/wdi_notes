# SQL Intro

###Postgres

- Object-Relational Database Management System
- Developed at UC Berkeley
- Open Source (very important)

- Installing Postgres psql command:

```
PATH=/usr/local/bin:/Applications/Postgres93.app/Contents/MacOS/bin:$PATH

```

- basic operations in psql console:

```
\d - display all tables in database

\q - quit interactive console
```
- you can also run arbitrary SQL commands here

[Full Documentation](http://www.postgresql.org/docs/9.3/static/)

### Datatypes

- There are a bunch of datatypes
- [Full List](http://www.postgresql.org/docs/9.3/interactive/datatype.html)
- Short list:

```
- char(n)
- varchar
- boolean
- int
- text
- date 
```

A few are special:

```
- serial
- timestamp

```
#### Auto-incrementing Types

- Primary Keys are usually a **serial** type

```
CREATE TABLE students
(
id serial NOT NULL primary key,
first_name varchar(255),
last_name varchar(255)
);

```

These types **auto-increment** are used to locate unique rows.

#### Default Values

- Columns Can Have default values

```
CREATE TABLE students
(
id serial NOT NULL primary key,
first_name varchar(255) DEFAULT 'charlie',
last_name varchar(255)
);

```

[More Reading](http://www.postgresql.org/docs/9.3/interactive/ddl-default.html)


# SQL Syntax Basics and CRUD operations

- Not case-sensitive (so be careful!).
- must end each expression in semi-colon (;)
- to comment use two hyphens (--)
- use quotes around text-y/string-y values and none on numerics

###(C)reate - "INSERT" statements

Add a new record to a table.

```
INSERT 
INTO table_name (colname1,colname2) 
VALUES (value1,value2);
```

###(R)ead - 'SELECT' statements and 'WHERE' clauses;

Retrieve and print records from tables

```
SELECT * FROM table_name;
```
* can be substituted by colum_names to get all values under that column;

-modify with **WHERE** clauses

```
SELECT 1 FROM table_name WHERE col_name=some_value;
```

###(U)pdate - "UPDATE" statements

Update a record

```
UPDATE table_name SET col_name = some_value WHERE id = some_id;
```

###(D)elete - "DELETE" and "DROP" statements

Remove a record or a table:

**remove a record**

```
DELETE FROM table_name WHERE id=some_id;
```

**remove a table**

```
DROP TABLE table_name;
```

## PG Gem

Allows us to interface with Postgres easily from within Ruby

#### Connection Object

A live connection interface on which to execute SQL commands.

```
@conn = PG.connect( dbname: 'students_db')
```

#### .exec Method

A method that takes a SQL command string as an argument for easy execution:

 