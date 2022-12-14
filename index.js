const inquirer = require("inquirer");
const consoleTable = require("console.table");
const connectionToDb = require("./db/connection"); 

// connection to database 
connectionToDb.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  initalize();
});

console.table("-----Welcome to Employee Tracker-----");

// Use inquirer to ask initial questions.
const initalize = async () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Please select from the following options below.",
        choices: [
          "All departments",
          "All roles",
          "All employees",
          "Create new department",
          "Create new role",
          "Create a new employee",
          "Update employee role",
          "Delete an employee",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers.choices);
      switch (answers.choices) {
        case answers.choices:
          if (answers.choices === "All departments") {
            departments();
          }
        case answers.choices:
          if (answers.choices === "All roles") {
            roles();
          }
        case answers.choices:
          if (answers.choices === "All employees") {
            console.log("selected");
            employees();
          }
        case answers.choices:
          if (answers.choices === "Create new department") {
            console.log("selected");
            createNewDepartment();
          }
        case answers.choices:
          if (answers.choices === "Create new role") {
            console.log("selected");
            createNewRole();
          }
        case answers.choices:
          if (answers.choices === "Create a new employee") {
            console.log("selected");
            createNewEmployee();
          }
        case answers.choices:
          if (answers.choices === "Update employee role") {
            console.log("selected");
            updateEmployeeRole();
          }
        case answers.choices:
          if (answers.choices === "Delete an employee") {
            console.log("selected");
            deleteEmployee();
          }
        case answers.choices:
          if (answers.choices === "Exit") {
            console.log("Done!");
            return;
          }
          break;
      }
    });
};

const departments = function () {
    connectionToDb.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    console.log("-----What would you like to do next?-----\n"); // endra text
    initalize();
  });
};
// See all departments     
const roles = function () {
  connectionToDb.query(
    `SELECT role.title, role.id, role.salary, department.name FROM role
JOIN department ON role.department_id = department.id`,
    function (err, results) {
      console.table(results);
      console.log("-----What would you like to do?-----\n"); 
      initalize();
    }
  );
};

// see all employees
const employees = function () {
  connectionToDb.query(
    `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id,role.title as Title, department.name AS Department, role.salary as Salary, CONCAT(manager.first_name, " ",manager.last_name) AS Manager
    FROM role
    JOIN employee ON role.id = employee.role_id
    LEFT JOIN employee manager ON employee.manager_id = manager.id
    JOIN department ON department.id = role.department_id;`,
    function (err, results) {
      console.table(results);
      console.log("-----What would you like to do?-----\n"); 
      initalize();
    }
  );
};
// inquirer for adding new department
const createNewDepartment = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the name of the new department you want to add.", 
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the id of the new department.", 
      },
    ]) // adds new name and id for new department 
    .then((answer) => {
      console.log(answer.name);
      connectionToDb.query(
        `INSERT INTO department(name, id) VALUES ("${answer.name}", ${answer.id});`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do?-----\n"); 
          initalize();
        }
      );
    });
};
// inquirer for adding new role 
const createNewRole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter the title of the new position.",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the starting salary of the new position?",
      },
      {
        type: "input",
        name: "department_id",
        message: "Please enter the department id for this position.",
      },
    ]) // adds new title, salary and department id  
    .then((answer) => {
      connectionToDb.query(
        `INSERT INTO role(title, salary, department_id) VALUES ("${answer.title}", ${answer.salary}, ${answer.department_id});`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do?-----\n"); 
          initalize();
        }
      );
    });
};
// inquirer for adding new employee
const createNewEmployee = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please enter the first name of the new employee.", 
      },
      {
        type: "input",
        name: "last_name",
        message: "Please enter the last name of the new employee.",
      },
      {
        type: "input",
        name: "role_id",
        message: "Please enter the role id for this position.", 
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter the employee's manager's id for this position. (Null if none).",
      },
    ]) // adds new first name, last name, role id and manager id into employee
    .then((answer) => {
      connectionToDb.query(
        `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
        ("${answer.first_name}", "${answer.last_name}", ${answer.role_id}, ${answer.manager_id});`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do?-----\n");
          initalize();
        }
      );
    });
};
// inquirer for updating employee role 
const updateEmployeeRole = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please enter the first name of the employee whose role you would like to update.",
      },
      {
        type: "input",
        name: "role_id",
        message: "Please enter the new role id you would like the employee to have.",
      },
    ]) // adds updated information of employee 
    .then((answers) => {
      console.log(answers.role_id, answers.first_name);
      connectionToDb.query(
        `UPDATE employee SET role_id = ${answers.role_id} WHERE first_name = "${answers.first_name}";`,
        function (err, results) {
          console.table(results);
          console.log("-----What would you like to do?-----\n"); 
          initalize();
        }
      );
    });
};
// inquirer for deleting employee 
const deleteEmployee = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Please enter the employee id you would like to delete.", 
      },
    ]) // deleting employee 
    .then((answer) => {
      connectionToDb.query(`DELETE FROM employee WHERE id = ${answer.id};`,
      function (err, results) {
          console.table(results);
          console.log("-----What would you like to do?-----\n"); 
          initalize();
        }
      )
    });
};


