  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 2, 1 ), 
("Michael", "Scott", 1, NULL ),
("Dwight", "Schrute", 2, 1),
("Andy", "Bernard", 2, 1),
("Toby", "Flenderson", 3, NULL),
("Kelly", "Kapoor", 3, 1),
("Pam", "Beesly", 3, 1),
("Madge", "Pudge", 4, 2),
("Darryl", "Philbin", 1, NULL),
("Roy", "Anderson", 4, 2),
("Creed", "Bratton", 5, 1 )

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
("HR", 1000,3),
("Customer Care", 2000, 3),
("Warehouse", 1500, 4),
("Quality Inssurance",5555, 5


SELECT * FROM employee_db.roles;

