const Employee = require('./Employee')

class Manager extends Employee {
    constructor(input) {
        super(input);

        this.officeNumber = input.officeNumber
        this.role = 'Manager'
    }

    getOffice() {
        return `
        <p class="card-text">Office Number: ${this.officeNumber}</p>
        `;
    }
}

module.exports = Manager;