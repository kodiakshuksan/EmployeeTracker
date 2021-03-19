// make sure trackEmployees.js is working
console.log('hello')

//importing npm package mysql to use with the database in mysql workbench
const mysql = require('mysql');

//will be needing inquire for the command line prompts
const inquirer = require('inquirer');

//I might need this
const fs = require('fs');

//imports table to display database better
const table = require('table');


//console.log(inquirer);
//console.log(table);



const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: 'Mydogs333!!!',
    database: 'tracker_db',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    start();
});

// connection.connect((err) => {
//     if (err) throw err;
//     start();
// });

const start = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Add Department',
                'Add Role',
                'Add Employee',
                'View Departments',
                'View Roles',
                'View Employees',
                'Update Employee Roles',
                'Exit',
            ],
        })
        .then((answers) => {
            switch (answers.action) {
                case 'Add Department':
                    addDepartment();
                    break;


                case 'Add Role':
                    addPart();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View Departments':
                    viewDepartment();
                    break;

                case 'View Roles':
                    viewRoles();
                    break;

                case 'View Employees':
                    viewEmployees();
                    break;

                //         case 'Update Employee Roles':
                //             updateEmployeeRoles();
                //             break;

                case 'Exit':
                    connection.end();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });


    const addDepartment = () =>
        inquirer
            .prompt([
                {
                    name: 'department_name',
                    type: 'input',
                    message: 'What Department do you want to add?',
                },
                {
                    name: 'id',
                    type: 'input',
                    message: 'What Department ID do you want to add?',
                }
            ])

            .then((answers) => {
                connection.query(
                    'INSERT INTO department SET ?',
                    {
                        id: answers.id,
                        department_name: answers.department_name,
                    },

                    console.log('department inserted!\n'));
                //     // starts prompts over again for user to have another choice
                connection.connect(start);

            })
}

const addPart = () =>
    inquirer
        .prompt([
            {
                name: 'part_title',
                type: 'input',
                message: 'What Part/Title/Role do you want to add?',
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary for this title?',
            },
            {
                name: 'department_id',
                type: 'input',
                message: 'What is the department_id number?',
            }
        ])

        .then((answers) => {
            connection.query(
                'INSERT INTO part SET ?',
                {
                    title: answers.part_title,
                    salary: answers.salary,
                    department_id: answers.department_id,
                },

                console.log('New part/title/role added!\n'));
            //     // starts prompts over again for user to have another choice
            
            connection.connect(start);
            connection.connect(start);


        })

const addEmployee = () =>
    inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'What is your first name?',
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'What is your last name?',
            },
            {
                name: 'part_id',
                type: 'input',
                message: 'What is the part_id number?',
            },
            {
                name: 'manager_id',
                type: 'input',
                message: 'What is the manager_id number?',
            }
        ])

        .then((answers) => {
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answers.first_name,
                    last_name: answers.last_name,
                    part_id: answers.part_id,
                    manager_id: answers.manager_id,
                },

                console.log('New employee added!\n'));
            //     // starts prompts over again for user to have another choice
            start();
        })
    



const viewDepartment = () => {
    console.log('Selecting all department...\n');
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        table.res;
        
        //connection.end();
        connection.connect(start);

    });

};

const viewRoles = () => {
    console.log('Selecting all parts...\n');
    connection.query('SELECT * FROM part', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        table.res;
        connection.connect(start);
        

    });

};

const viewEmployees = () => {
    console.log('Selecting all employees...\n');
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        table.res;
        connection.connect(start);
        

    });

};


    

    //  const updateEmployeeRoles = () => {
    //     console.log('Updating employee roles...\n');
    //     const query = connection.query(
    //       'UPDATE employee SET ? WHERE ?',
    //       [
    //         {
    //           part_id: '' ,
    //         },
    //         {
    //           manager_id: '',
    //         },
    //         {
        //      manager_id: '',
        //      },
    //       ],
    //       (err, res) => {
    //         if (err) throw err;
    //         console.log(`${res.affectedRows} Employee Roles updated!\n`);
    //         // Call deleteProduct AFTER the UPDATE completes
    //         //deleteProduct();
    //         const viewEmployees = () => {
    //         console.log('Selecting all employees...\n');
    //         connection.query('SELECT * FROM employee', (err, res) => {
    //         if (err) throw err;
    //         // Log all results of the SELECT statement
    //         console.log(res);
    //         table.res;
    //         connection.connect(start);
    //         //connection.end();
    
    //     });
    
    // };
    //delete ?
    // const deleteProduct = () => {
    //     console.log('Deleting...\n');
    //     connection.query(
    //       'DELETE FROM products WHERE ?',
    //       {
    //         flavor: 'strawberry',
    //       },
    //       (err, res) => {
    //         if (err) throw err;
    //         console.log(`${res.affectedRows} deleted!\n`);
    //         // Call readProducts AFTER the DELETE completes
    //         readProducts();
    //       }
    //     );
    //   };

//readEmployees and  view employees function
// const readEmployees = () => {
//     console.log('Selecting all employees...\n');
//     connection.query('SELECT * FROM employee', (err, res) => {
//       if (err) throw err;
//       // Log all results of the SELECT statement
//       console.log(res);
//       connection.end();
//     });
//   };
        




    // -- show ALL books with authors
    // -- INNER JOIN will only return all matching values from both tables
    // SELECT title, firstName, lastName
    // FROM books
    // INNER JOIN authors ON books.authorId = authors.id;
    
    // -- show ALL books, even if we don't know the author
    // -- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
    // SELECT title, firstName, lastName
    // FROM books
    // LEFT JOIN authors ON books.authorId = authors.id;
    
    // -- show ALL books, even if we don't know the author
    // -- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
    // SELECT title, firstName, lastName
    // FROM books
    // RIGHT JOIN authors ON books.authorId = authors.id;






















