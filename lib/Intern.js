const Employee = require('./Employee')

class Intern extends Employee {
    constructor(input) {
        super(input);

        this.school = input.school
        this.role = 'Intern'
    }

    getSchool() {
        return `
        <p class="card-text">School: ${this.school}</p>
        `;
    }
}

module.exports = Intern;