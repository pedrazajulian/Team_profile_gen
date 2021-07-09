const { test, expect } = require("@jest/globals");
const Intern = require("../library/Intern");

test("Can make Intern object", () => {
  const e = new Intern();
  expect(typeof e).toBe("object");
});
test("set school", () => {
  const school = "UNCC";
  const e = new Intern("JDP", 10, "email", school);
  expect(e.school).toBe(school);
});
test("get role", () => {
  const role = "Intern";
  const e = new Intern("JDP", 10, "email", "UNCC");
  expect(e.getRole()).toBe(role);
});
test("get school", () => {
  const school = "UNCC";
  const e = new Intern("JDP", 10, "email", school);
  expect(e.getSchool()).toBe(school);
});
