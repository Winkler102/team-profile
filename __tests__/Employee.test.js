const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

mockInput = {
    name: 'Dave',
    id: 212223,
    email: 'fake@fake.fake',
    role: 'Employee'
};

test('creates Employee object', () => {
    const employee = new Employee(mockInput);

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(212223);
    expect(employee.enail).toBe('fake@fake.fake');
    expect(employee.role).toBe('Employee');
});

test("get employee's name", () => {
    const employee = new Employee(mockInput);

    expect(employee.getName()).toEqual(expect.any(String));
});

test("get employee's id as a string", () => {
    const employee = new Employee(mockInput);

    expect(employee.getID()).toEqual(expect.any(String));
});

test("get employee's email as a string", () => {
    const employee = new Employee(mockInput);

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("get employee's role as a string", () => {
    const employee = new Employee(mockInput);

    expect(employee.getRole()).toEqual(expect.any(String));
});