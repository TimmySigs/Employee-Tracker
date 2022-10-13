
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Lennon", 1, NULL), ("Paul", "McCartney", 2, 1), ("George", "Harrison", 3, NULL), ("Ringo", "Starr", 4, 3), ("Chuck", "Berry", 5, 5), ("Elvis", "Presly", 6, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bobby", "Jenks", 2, 1), ("Paul", "Konerko", 4, 3), ("Mark", "Burhrle", 6, 5);



INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 80000, 1), ("Salesperson", 65000, 1), ("Legal Team Lead", 120000, 2), ("Lawyer", 105000, 2), ("Lead Engineer", 111000, 3), ("Engineer", 95000, 3);


INSERT INTO department (name)
VALUES ("Sales"), ("Legal"), ("Engineering");