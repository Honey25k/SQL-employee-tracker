INSERT INTO department (name) VALUES
("Information technology"),
("Accounting"),
("HR"),
("Service");

INSERT INTO role (title, salary, department_id) VALUES
("Product Manager", 150000, 1),
("Product Owner", 130000, 1),
("Scrum Master", 105000, 1),
("Accountant", 70000, 2),
("HR Manager", 120000, 3),
("HR Assistant", 80000, 3),
("Sales Manager", 90000, 4),
("Customer Service Agent", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("James", "Doe", 1, null),
("Sabrina", "Spellman", 2, 1),
("Harvey", "Specter", 3, null),
("Luis", "Litt", 4, 3),
("Stella", "Johnsson", 5, null),
("Donald", "Duck", 6, 5,),
("Lisa", "Simpson", 7, null),
("Salem", "Saberhagen", 8, 7);


