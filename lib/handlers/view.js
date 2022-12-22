const inquirer = require("inquirer");
const prompts = require("../prompts");
const queries = require("../queries");

module.exports = function (display) {
    return {
        departments: function () {
            return display(queries.view.departments);
        },
        roles: function () {
            return inquirer.prompt(prompts.view.roles).then((answers) => {
                return display(queries.view.roles(answers));
            });
        },
        employees: function () {
            return inquirer.prompt(prompts.view.employees).then((answers) => {
                return display(queries.view.employees(answers));
            });
        },
    };
};
