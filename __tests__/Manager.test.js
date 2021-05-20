const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

mockInput = {
    name: 'Dave',
    id: 212223,
    email: 'fake@fake.fake',
    role: 'Employee',
    officeNumber: 121314
};

test('creates manager object', () => {
    const manager = new Manager(mockInput);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(212223);
    expect(manager.enail).toBe('fake@fake.fake');
    expect(manager.role).toBe('Manager');
});

test("get manager's id as a number", () => {
    const manager = new Manager(mockInput);

    expect(manager.getID()).toEqual(expect.any(Number));
});

test("get manager's email as a string", () => {
    const manager = new Manager(mockInput);

    expect(manager.getEmail()).toEqual(expect.any(String));
});

test("get manager's role as a string", () => {
    const manager = new Manager(mockInput);

    expect(manager.getRole()).toEqual(expect.any(String));
});