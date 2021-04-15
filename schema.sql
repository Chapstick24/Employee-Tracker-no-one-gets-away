DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER(10),
manager_id INTEGER (10) NULL,
PRIMARY KEY (id)
);

SELECT * FROM employee_db.employee;


CREATE TABLE department(
id INT(11) PRIMARY KEY,
name VARCHAR(30),
PRIMARY KEY (id)
);


CREATE TABLE roles (
  id INTEGER AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL (20.2),
  department_id INTEGER (10),
  PRIMARY KEY (id)
  );