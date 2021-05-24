const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(input) {
        super(input);

        this.gitHub = input.gitHub
        this.role = 'Engineer'
    }

    getGithub() {
        return `
        <a href="https://github.com/${this.gitHub}" target="_blank" class="card-link">${this.gitHub}</a>
        `;
    }
}

module.exports = Engineer;