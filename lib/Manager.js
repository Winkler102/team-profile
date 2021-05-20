const Employee = require('./Employee')

class Manager extends Employee {
    constructor(input) {
        super(input);

        this.officeNumber = input.officeNumber
        this.role = 'Manager'
    }
}

module.exports = Manager;