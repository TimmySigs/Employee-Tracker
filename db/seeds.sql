INSERT INTO departments (name)
VALUES 
("Administration"),
("Music"),
("Visual");

INSERT INTO roles (title, salary, department_id)
VALUES 
("CEO", 125000, 1),
("Tour Director", 70000, 1),
("Administrative Intern", 100, 1),
("Brass Arranger", 65000, 2),
("Brass Caption Head", 45000, 2),
("Brass Tech", 4000, 2),
("Percussion Arranger", 65000, 2),
("Percussion Caption Head", 45000, 2),
("Percussion Tech", 4000, 2);


INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES 
("Paul", "Konerko", 1, null, 1),
("Bobby", "Jenks", 2, 1, 1),
("Joe", "Crede", 3, 2, 0),
("Scotty", "Pods", 4, 1, 1),
("Aaron", "Rowand", 5, 4, 1),
("Frank", "Thomas", 6, 5, 0),
("Freddy", "Garcia", 7, 1, 1),
("Jose", "Contreras", 8, 7, 1),
("Mark", "Buehrle", 9, 8, 0);

