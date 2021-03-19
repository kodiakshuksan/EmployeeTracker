const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);
console.log('hello')


// const askMainQuestion = () => {
//   inquirer
//     .prompt({
//       name: 'action',
//       type: 'raw list',
//       message: 'What would you like to do?',
//       choices: [
//         'Add Department',
//         'Add Part',
//         'Add Employee',
//         'View Departments',
//         'View Parts',
//         'View Employees',
//         'Update Employee Roles',
//         'exit',
//       ],
//     })
//     .then((answer) => {
//       switch (answer.action) {
//         case 'Add Department':
//           addDepartment();
//           break;

        // case 'Add Part':
        //   addPart();
        //   break;

        // case 'Add Employee':
        //   addEmployee();
        //   break;

        // case 'View Departments':
        //   viewDepartments();
        //   break;

        // case 'View Roles':
        //   viewRoles();
        //   break;

        // case 'View Employees':
        //   viewEmployees();
        //   break;

        // case 'Update Employee Roles':
        //   updateEmployeeRoles();
        //   break;

//         case 'Exit':
//           connection.end();
//           break;

//         default:
//           console.log(`Invalid action: ${answer.action}`);
//           break;
//       }
//     });
// };

// const addDepartment = () => {
//   inquirer
//     .prompt({
//       name: 'departmentName',
//       type: 'input',
//       message: 'What Department do you want to add?',
//     })
//     .then((answer) => {
//       const addDepartment = () => {
//         console.log('Inserting a new department...\n');
//         const query = connection.query('INSERT INTO department SET ?',
//           {
//             department_name: 'English',
//           }),
          // (err, res) => {
          //   if (err) throw err;
          //   console.log(`${res.affectedRows} department inserted!\n`);
          //   // Call updateProduct AFTER the INSERT completes
          //   addDepartmentD();
          // })
            





        // const addPart = () => {
        //   inquirer
        //     .prompt({
        //       name: 'partAdd',
        //       type: 'input',
        //       message: 'What Part/Role do you want to add?',
        //     })
        //     .then((answer) => {
        //             const query = 'INSERT INTO part SET ?';
        //             connection.query(query, { artist: answer.artist }, (err, res) => {
        //               if (err) throw err;
        //               res.forEach(({ position, song, year }) => {
        //                 console.log(
        //                   `Position: ${position} || Song: ${song} || Year: ${year}`
        //                 );
        //               });
        //               runSearch();
        //             });
        //           });
        //       };

        // const addEmployee = () => {
        //   inquirer
        //     .prompt({
        //       name: 'first_name',
        //       type: 'input',
        //       message: 'Enter first name of the employee you wish to add.',
        //     })
        //     ({
        //       name: 'last_name',
        //       type: 'input',
        //       message: 'Enter last name of employee you wish to add.',
        //     })
        //     .then((answer) => {
        //     const query = 'SELECT position, song, year FROM top5000 WHERE ?';
        //     connection.query(query, { artist: answer.artist }, (err, res) => {
        //       if (err) throw err;
        //       res.forEach(({ position, song, year }) => {
        //         console.log(
        //           `Position: ${position} || Song: ${song} || Year: ${year}`
        //         );
        //       });
        //       runSearch();
        //     });
        //   });
        // };


        // const viewDepartments = () => {
        //   //display the departments array
        //   res.forEach(({ position, dept_name, }) => {
        //     console.log(
        //       `Position: ${position} || dept_name: ${dept_name}`
        //}

        //const viewRoles = () => {
        //display the Roles array
        // res.forEach(({ position, song, year }) => {
        //           console.log(
        //             `Position: ${position} || Song: ${song} || Year: ${year}`
        //}

        //const viewEmployees = () => {
        //display the Employees array console.log(table)
        // res.forEach(({ position, song, year }) => {
        //           console.log(
        //             `Position: ${position} || Song: ${song} || Year: ${year}`
        //}


        //const updateEmployeeRoles = () => {
        //update and display employee roles together by joining these columns?
        // -- Updates the row where the column name is peter --
        // UPDATE people
        // SET has_pet = true, pet_name = "Franklin", pet_age = 2
        // WHERE id = 4;

        // SELECT * FROM people;
        // res.forEach(({ position, song, year }) => {
        //           console.log(
        //             `Position: ${position} || Song: ${song} || Year: ${year}`
        //}


        
    

    module.exports = sequelize;