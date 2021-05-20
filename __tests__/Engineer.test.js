const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

mockInput = {
    name: 'Dave',
    id: 212223,
    email: 'fake@fake.fake',
    role: 'employee',
    gitHub: 'fakeGitHub'
};

test('creates engineer object', () => {
    const engineer = new Engineer(mockInput);

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe(212223);
    expect(engineer.enail).toBe('fake@fake.fake');
    expect(engineer.role).toBe('Engineer');
});

test("get engineer's id as a number", () => {
    const engineer = new Engineer(mockInput);

    expect(engineer.getID()).toEqual(expect.any(Number));
});

test("get engineer's email as a string", () => {
    const engineer = new Engineer(mockInput);

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("get engineer's role as a string", () => {
    const engineer = new Engineer(mockInput);

    expect(engineer.getRole()).toEqual(expect.any(String));
});

test("get engineer's gitHub as astring", () => {
    const engineer = new Engineer(mockInput);

    expect(engineer.getGithub()).toEqual(expect.any(String));
});