
const Employee = require("../lib/Employee");

// Testing input
describe("Create Employee", () => {
    test('It should take generate a new employee', () => {
        const e = new Employee();
        expect(typeof (e)).toBe('object');
    });
});

describe("Create Name", () => {
    test('It should take input for name', () => {
        const name = "Julian";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
});

describe("Create ID", () => {
    test('It should take input for ID', () => {
        const testValue = 1
        const e = new Employee("Julian", testValue);
        expect(e.id).toBe(testValue);
    });
});

describe("Create Email", () => {
    test('It should take input for email', () => {
        const testValue = "test@gmail.com";
        const e = new Employee("Julian", 1, testValue);
        expect(e.email).toBe(testValue);
    });
});

//Testing retrieving input
describe("Get Name", () => {
    it('It should get name input', () => {
        const testValue = "Julian";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });
});

describe("Get ID", () => {
    it('It should get ID input', () => {
        const testValue = 1;
        const e = new Employee("Julian", testValue);
        expect(e.getId()).toBe(testValue);
    });
});

describe("Get Email", () => {
    it('It should get email input', () => {
        const testValue = "test@gmail.com";
        const e = new Employee("Julian", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });
});

describe("Get Role", () => {
    it('It should take  input for role', () => {
        const testValue = "Employee";
        const e = new Employee ("Julian" , 1, "test@gmail.com");
        expect(e.getRole()).toBe(testValue);
    });
});
