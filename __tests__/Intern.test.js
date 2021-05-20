const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

mockInput = {
    name: 'Dave',
    id: 212223,
    email: 'fake@fake.fake',
    role: 'Employee',
    school: 'Fake University'
};

test('creates intern object', () => {
    const intern = new Intern(mockInput);

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(212223);
    expect(intern.enail).toBe('fake@fake.fake');
    expect(intern.role).toBe('Intern');
});

test("get intern's id as a number", () => {
    const intern = new Intern(mockInput);

    expect(intern.getID()).toEqual(expect.any(Number));
});

test("get intern's email as a string", () => {
    const intern = new Intern(mockInput);

    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("get intern's role as a string", () => {
    const intern = new Intern(mockInput);

    expect(intern.getRole()).toEqual(expect.any(String));
});

test("get intern's school as a string", () => {
    const intern = new Intern(mockInput);

    expect(intern.getSchool()).toEqual(expect.any(String));
});