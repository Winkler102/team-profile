const inquirer = require('inquirer');
const fs = require('fs');
let currentRole = 1;
// role 1 = Manager | role 2 = Engineer | role 3 = Intern //

const employeeInput = [
    {
        type: 'input',
        name: 'name',
        message: "What is your employee's name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter an employee name.")
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is Employee's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is Employee's Email?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter an employee email.")
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the office number?",
        when: () => {
            if (currentRole === 1) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What is the engineer's GitHub username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter an office number.")
                return false;
            }
        },
        when: () => {
            if (currentRole === 2) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school's name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter a school's name.")
                return false;
            }
        },
        when: () => {
            if (currentRole === 3) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'nextRole',
        message: 'Please select role for next Employee.',
        choices: ['Engineer', 'Intern', 'Finish Building Team'],
        default: 2
    }
];