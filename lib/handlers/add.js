const inquirer = require("inquirer")
const prompts = require("../prompts")
const queries = require("../queries")

module.exports = function (select, textOnly, execute) {
    return {
        department: () => {
            return inquirer.prompt(prompts.add().department)
                .then(answers => {
                    const sql = queries.add.department(answers)
                    const message = `${answers.name} has been added to departments.`
                    return execute(sql, message)
                })
        },

        role: () => {
            return select(queries.view.departments)
                .then(departments => {
                    return inquirer.prompt(prompts.add().role(departments))
                })
                .then(answers => {
                    const sql = queries.add.role(answers)
                    const message = `${answers.title} has been added as a role in the ${answers.department.match(textOnly)} department.`
                    return execute(sql, message)
                })
        },

        employee: () => {
            return select(queries.view.roles({ sort: "" }))
                .then(roles => {
                    return select(queries.view.employees({ sort: "WHERE e.is_manager = 1" }))
                        .then(managers => {
                            return inquirer.prompt(prompts.add().employee(roles, managers))
                        })
                })
                .then(answers => {
                    answers.isManager = answers.isManager ? 1 : 0
                    const sql = queries.add.employee(answers)
                    const message = `${answers.firstName} ${answers.lastName} has been added to employees.`
                    return execute(sql, message)
                })
        }

    }
}