// const cTable = require("console.table")
// const inquirer = require("inquirer")
// const { handlers } = require("./lib")
// const mysql = require("mysql2")


// const initializeApp = () => {
//     inquirer.promt = ([
//         {
//             type: "list",
//             name: "opening",
//             message: "What would you like to do?",
//             choices: [
//         "Exit",
//         "View all departments",
//         "View all roles",
//         "View all employees",
//         "Add a department",
//         "Add a role",
//         "Add an employee",
//         "Update a role's salary",
//         "Update an employee's information",
//         "Delete a department",
//         "Delete a role",
//         "Delete an employee",
//     ]
// }
//     ])
//     .then (answers.opening) 
//         const openingChoices[0]:
//             console.log("Goodbye!")
//             return handlers.end()

//         if openingChoices[1]:
//             await handlers.view.departments()
//             break

//         case openingChoices[2]:
//             await handlers.view.roles()
//             break

//         case openingChoices[3]:
//             await handlers.view.employees()
//             break

//         case openingChoices[4]:
//             await handlers.add.department()
//             break

//         case openingChoices[5]:
//             await handlers.add.role()
//             break

//         case openingChoices[6]:
//             await handlers.add.employee()
//             break

//         case openingChoices[7]:
//             await handlers.update.role()
//             break

//         case openingChoices[8]:
//             await handlers.update.employee()
//             break

//         case openingChoices[9]:
//             await handlers.delete.department()
//             break

//         case openingChoices[10]:
//             await handlers.delete.role()
//             break

//         case openingChoices[11]:
//             await handlers.delete.employee()
//             break
//     }

//     return initializeApp()


// initializeApp()

const cTable = require("console.table")
const inquirer = require("inquirer")
const { handlers } = require("./lib")
const mysql = require("mysql2")

const initializeApp = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "opening",
            message: "What would you like to do?",
            choices: [
                "Exit",
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
                "Delete an employee"
            ]
        }
    ]).then(answers => {
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

        return initializeApp()
    })
}

initializeApp()
