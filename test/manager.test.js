
const Manager = require("../lib/Manager");

//Testing input
describe("Set office number", () => {
    test('It should set office number', () => {
        const testValue = 1;
        const e = new Manager("Julian", 1, "test@gmail.com", testValue);
        expect(e.officeNum).toBe(testValue);
    });
});

//Testing retrieving input
describe("Get role", () => {
    it('It should get the role of manager', () => {
        const testValue = "Manager";
        const e = new Manager("Julian", 1, "test@gmail.com", 1);
        expect(e.getRole()).toBe(testValue);
    });
});

describe("Get office number", () => {
    it('It should retrieve office number', () => {
        const testValue = 1;
        const e = new Manager("Julian", 1, "test@gmail.com", testValue);
        expect(e.getOfficeNum()).toBe(testValue);
    });
});