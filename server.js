const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");
require('dotenv').config()

const connection = mysql.createConnection({
    host:'localhost',

    port: 3306,

    user: 'root',

    password:'Rooster1',
    database:"employee_db",
});

connection.connect((err) =>{
if (err) throw err;
getEmployee()
});

const getEmployee = () => {
    inquirer.prompt({
    name: "action",
    type: "rawlist",
    message: "what are you wanting to do",
    choices: [
        'Add Employee',
        'View Employee List',
        'Add Department',
        'View Department List',
        'Add Roles',
        'View all Roles',
        'Destroy Employee'
    ]


})}

