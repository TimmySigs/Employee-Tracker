const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: "DB_USER",
    password: "DB_PASSWORD",
    database: "employees_db",
});