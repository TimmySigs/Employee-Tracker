const cTable = require("console.table")
const inquirer = require("inquirer")
const { handlers } = require("./lib")
const mysql = require("mysql2")

require("dotenv").config()

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "DB_PASSWORD",
        database: "employees_db",
    },
    console.log("connected to the employee database")
)


db.connect(err => {
    if (err) throw (err);
    console.log("Connected to " + process.env.DB_NAME);
    nowConnected();
});

nowConnected = () => {
    console.log("EMPLOYEE MANAGER");
    initializeApp();
}


const initializeApp = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "opening",
                message: "What would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update a role's salary",
                    "Update an employee's information",
                    "Delete a department",
                    "Delete a role",
                    "Delete an employee",
                    "Exit"
                ]
            }
        ])
        .then(answers => {
            switch (answers.opening) {
                case "Exit":
                    console.log("Goodbye!")
                    return handlers.end()

                case "View all departments":
                    handlers.view.departments()
                    break

                case "View all roles":
                    handlers.view.roles()
                    break

                case "View all employees":
                    handlers.view.employees()
                    break

                case "Add a department":
                    handlers.add.department()
                    break

                case "Add a role":
                    handlers.add.role()
                    break

                case "Add an employee":
                    handlers.add.employee()
                    break

                case "Update a role's salary":
                    handlers.update.role()
                    break

                case "Update an employee's information":
                    handlers.update.employee()
                    break

                case "Delete a department":
                    handlers.delete.department()
                    break

                case "Delete a role":
                    handlers.delete.role()
                    break

                case "Delete an employee":
                    handlers.delete.employee()
                    break
            }

            initializeApp()
        })
}

initializeApp()
