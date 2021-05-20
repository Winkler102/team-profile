class Employee {
    constructor(employeeInfo) {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.enail = employeeInfo.email;
        this.role = employeeInfo.role;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.enail;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;