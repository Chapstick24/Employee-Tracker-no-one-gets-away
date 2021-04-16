require('dotenv').config()
const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");
var figlet = require('figlet');


const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'Rooster1',
    database: "employee_db",
});
const init = async() =>{
    await connection.connect((err) => {
        if (err) throw err;
        
        
    });
    await getEmployee()
}
init()

const displayFig = async() => {
    figlet('Scranton!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
}

const getEmployee = async() => {
    await displayFig()
   await inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "what are you wanting to do",
        choices: [
            'Add Employee',
            'View all Employees my Manager',
            'Add Department',
            'View Department List',
            'Add Roles',
            'View all Roles',
            'Destroy Employee',
            'View Employee by Manager'
        ],


    })
        .then((answer) => {
            switch (answer.action) {
                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View all Employees my Manager':
                    viewEmployee()
                    break;

                case 'Add Department':
                addDepartment();
                    break;

                case 'View Department List':
                    viewDepartment();
                    break;
                
                case 'Add Roles':
                    addRoles();
                    break;

                case 'View all Roles':
                    viewRole();
                    break;

                case 'Destroy Employee':
                    deleteEmployee();
                    break;
                
                case 'View Employee by Manager':
                    viewByManager()
                    break;

            }
        })
}

viewEmployee = () => {
    connection.query('SELECT e.id, e.first_name, e.last_name, d.name AS department, r.title, r.salary, CONCAT_WS(" ", m.first_name, m.last_name) AS manager FROM employee e LEFT JOIN employee m ON m.id = e.manager_id INNER JOIN roles r ON e.role_id = r.department_id INNER JOIN department d ON r.department_id = d.id ORDER BY e.id ASC', (err, res) => {
      if (err) throw err;
    console.table(res)
    getEmployee()
    });
  };