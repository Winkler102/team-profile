class Employee {
    constructor(employeeInfo) {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.enail = employeeInfo.email;
        this.role = employeeInfo.role;
    };

    getName() {
        return `
        <h5 class="card-title">${this.name}</h5>
        `;
    };

    getID() {
        return `
        <p class="card-text">ID: ${this.id}</p>
        `;
    };

    getEmail() {
        return `
        <a href="mailto: ${this.enail}" target="_blank" class="card-link">${this.enail}</a>
        `;
    };

    getRole() {
        return `
        <h6 class="card-subtitle mb-2 p-2 text-muted border-bottom border-dark">${this.role}</h6>
        `;
    };
};

module.exports = Employee;