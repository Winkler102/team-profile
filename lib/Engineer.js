const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(input) {
        super(input);

        this.gitHub = input.gitHub
        this.role = 'Engineer'
    }

    getGithub() {
        return this.gitHub;
    }
}

module.exports = Engineer;