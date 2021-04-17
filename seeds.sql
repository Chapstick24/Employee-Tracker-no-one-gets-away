  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 2, 2 ), 
("Michael", "Scott", 1, NULL ),
("Dwight", "Schrute", 2, 2),
("Andy", "Bernard", 2, 2),
("Toby", "Flenderson", 3, NULL),
("Kelly", "Kapoor", 3, 2),
("Pam", "Beesly", 3, 2),
("Madge", "Pudge", 4, 9),
("Darryl", "Philbin", 1, NULL),
("Roy", "Anderson", 4, 9),
("Creed", "Bratton", 5, 2 )

SELECT * FROM employee_db.employee;


INSERT INTO department (name)
VALUES("Manager"),
("Sales"),
("Admin"),
("Warehouse"),
("Quabity assuancewit")

SELECT * FROM employee_db.department;

INSERT INTO roles (title, salary, department_id) 
VALUES ("Boss", 8000, 1),
("Paper Sales", 5000, 2),
("Customer Care", 2000, 3),
("Warehouse", 1500, 4),
("Quality Inssurance",5555, 5)


SELECT * FROM employee_db.roles;

