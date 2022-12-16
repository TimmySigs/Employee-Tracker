const inquirer = require("inquirer")
const prompts = require("../prompts")
const queries = require("../queries")

module.exports = function (select, textOnly, execute) {
    return {
        department: () => {
            return select(queries.view.departments)
                .then(departments => {
                    return inquirer.prompt(prompts.delete.department(departments))
                })
                .then(answers => {
                    const sql = queries.delete.department(answers)
                    const message = `The ${answers.department.match(textOnly)} department has been successfully deleted.`
                    return execute(sql, message)
                })
        },


        role: () => {
            return select(queries.view.roles({ sort: "" }))
                .then(roles => {
                    return inquirer.prompt(prompts.delete.role(roles))
                })
                .then(answers => {
                    const sql = queries.delete.role(answers)
                    const message = `The ${answers.role.match(textOnly)} role has been successfully deleted.`
                    return execute(sql, message)
                })
        },


        employee: () => {
            return select(queries.view.employees({ sort: "" }))
                .then(employees => {
                    return inquirer.prompt(prompts.delete.employee(employees))
                })
                .then(answers => {
                    const sql = queries.delete.employee(answers)
                    const message = `The employee ${answers.employee.match(textOnly)} has been successfully deleted.`
                    return execute(sql, message)
                })
        }

    }
}