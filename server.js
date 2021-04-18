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
const init = async () => {
    await connection.connect((err) => {
        if (err) throw err;


    });
    // console.log("something in here")
    await displayFig()


}


const displayFig = () => {
    figlet('Scranton!!', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
        getEmployee()
    });
}

const getEmployee = async () => {
    console.log("emplyee func")

    return inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "what are you wanting to do",
        choices: [
            'Add Employee',
            'View all Employees with Manager',
            'Add Department',
            'View Department List',
            'Add Roles',
            'View all Roles',
            'fire Employee'
        ]


    })
        .then((answer) => {
            switch (answer.action) {
                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View all Employees with Manager':
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

                case 'fire Employee':
                    deleteEmployee();
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

viewDepartment = () => {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        getEmployee();
    });
};


addDepartment = () => {
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: " new department?"
        }
    ]).then(function (answerDept) {
        connection.query(`INSERT INTO department (name) VALUES ('${answerDept.department}')`, (err, res) => {
            if (err) throw err;
            viewDepartment();
            getEmployee();
        })
    })
};

viewRole = () => {
    connection.query("SELECT * FROM employee_db.roles;", (err, res) => {
        if (err) throw err;
        console.table(res);
        getEmployee();

    })
}

addEmployee = () => {
    inquirer.prompt([{

        name: "first_name",
        type: "input",
        message: "Employee's first name?",

    },
    {
        name: "last_name",
        type: "input",
        message: "Employee's Last name?",

    },
    {
        name: "role_id",
        type: "list",
        message: "What role? Select a Number 1 for Manager, 2 Sales, 3 Customer Care, 4 Warehouse",
        choices: ["1", "2", "3", "4"]

    },
    {
        name: "id",
        type: "input",
        message: "what is your 2 digit id number?",
    },
    {
        name: "manager_id",
        type: "list",
        message: "Where is this employee working? 2 for Ofiice, 9 for warehouse",
        choices: ["2", "9"]

    }
    ])
        .then(function (answerEmpl) {
            connection.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES("${answerEmpl.id}", "${answerEmpl.first_name}", "${answerEmpl.last_name}", "${answerEmpl.role_id}", "${answerEmpl.manager_id}")`, (err, res) => {
                if (err) throw err;
                console.log("added employee")
                viewEmployee()
            }
            )
        })


}
addRoles = () => {
    inquirer.prompt([{

        name: "title",
        type: "input",
        message: "What is the title of this new role",
    },
    {

        name: "salary",
        type: "input",
        message: "whats the new yearly salary",
    }, {

        name: "department_id",
        type: "input",
        message: "what 2 digit number would you like to give this role"


    }])
        .then(function (answerRole) {
            connection.query(`INSERT INTO roles (title, salary, department_id) VALUES("${answerRole.title}", "${answerRole.salary}", "${answerRole.department_id}")`, (err, res) => {
                if (err) throw err;
                console.log("added role")
                viewRole()
            })
        })
};
deleteEmployee = () => {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "select employee that you would like to fire by entering in there id?",
    }])
        .then(function (answerDele) {
            connection.query(`DELETE FROM employee WHERE id ="${answerDele.id}"`)
            viewEmployee()
        })
};

init()