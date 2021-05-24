const inquirer = require('inquirer');
const fs = require('fs');
const constructHTML = require('./src/constructHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { cpuUsage } = require('process');
let employeeRoster = [];
let currentRole = 1;
// role 1 = Manager | role 2 = Engineer | role 3 = Intern //

const promptInput = () => {
    return inquirer.prompt([
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
    ])
};

const pushArray = (object) => {
    switch (currentRole) {
        case 1:
            employeeRoster.push(new Manager(object));
            break;
        case 2:
            employeeRoster.push(new Engineer(object));
            break;
        case 3:
            employeeRoster.push(new Intern(object));
            break;
        default:
            break;
    };
};

const selectNextRole = (role) => {
    if (role.nextRole === 'Engineer') {
        currentRole = 2;
        return 2;
    } else if (role.nextRole === 'Intern') {
        currentRole = 3;
        return 3;
    } else {
        return 4;
    }
};

const makeHTMLFile = function (fileContent) {
    fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
            console.log(err)
        }
    });
}

const runPrompts = function () {
    promptInput()
        .then(input => {
            pushArray(input);
            return input;
        })
        .then(input => {
            return selectNextRole(input);
        })
        .then(roleNumber => {
            if (roleNumber === 4) {
                return 4;
            } else {
                runPrompts();
            }
        })
        .then(roleNumber => {
            if (roleNumber === 4) {
                fileContent = constructHTML(employeeRoster);
                makeHTMLFile(fileContent);
            };
        });

};

runPrompts();