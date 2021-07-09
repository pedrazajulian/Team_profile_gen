const Engineer = require("../lib/Engineer");

//Testing input
describe("Set GitHub", () => {
    test('It should set Github username', () => {
        const testValue = "username";
        const e = new Engineer("Julian", 1, "test@gmail.com", testValue);
        expect(e.github).toBe(testValue);
    });
});


//Testing retrieving
describe("Get role", () => {
    it('It should get the role of engineer', () => {
        const testValue = "Engineer";
        const e = new Engineer("Julian", 1, "test@gmail.com", "username");
        expect(e.getRole()).toBe(testValue);
    });
});

describe("Connect GitHub", () => {
    it('It should retrieve GitHub username', () => {
        const testValue = "username";
        const e = new Engineer("Julian", 1, "test@gmail.com", testValue);
        expect(e.getGithub()).toBe(testValue);
    });
});