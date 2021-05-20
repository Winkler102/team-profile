const Employee = require('./Employee')

class Intern extends Employee {
    constructor(input) {
        super(input);

        this.school = input.school
        this.role = 'Intern'
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;