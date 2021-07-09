const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./utils/generateHTML");

const team = [];
const employeeID = [];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "what is your manager's name",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the Manager's ID",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        return true;
      }
      return "Please enter a number greater than zero.";
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the manager's email address",
    validate: (answer) => {
      const email = answer.match(/\S+@\S+\.\S+/);
      if (email) {
        return true;
      }
      return "Please enter a valid email address";
    },
  },
  {
    type: "input",
    name: "managerOffice",
    message: "What is the manager's office number",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        return true;
      }
      return "Please enter a number greater than zero.";
    },
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineer's name",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    },
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the engineer's employee ID",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        if (employeeID.includes(answer)) {
          return "This ID is already taken. Please enter a different number.";
        } else {
          return true;
        }
      }
      return "Please enter a number greater than zero.";
    },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineer's email address",
    validate: (answer) => {
      const email = answer.match(/\S+@\S+\.\S+/);
      if (email) {
        return true;
      }
      return "Please enter a valid email address";
    },
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "What is the engineer's GitHub username",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    },
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    },
  },
  {
    type: "input",
    name: "internId",
    message: "What is the intern's employee ID",
    validate: (answer) => {
      const num = answer.match(/^[1-9]\d*$/);
      if (num) {
        if (employeeID.includes(answer)) {
          return "This ID is already taken. Please enter a different number.";
        } else {
          return true;
        }
      }
      return "Please enter a number greater than zero.";
    },
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the intern's email address",
    validate: (answer) => {
      const email = answer.match(/\S+@\S+\.\S+/);
      if (email) {
        return true;
      }
      return "Please enter a valid email address";
    },
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter the school/university the intern attended",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    },
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOffice
    );
    team.push(manager);
    employeeID.push(answers.managerId);
    employeeRole();
  });
}

function employeeRole() {
  const roleQuestion = [
    {
      type: "list",
      name: "role",
      message:
        "Would you like to add another employee?",
      choices: ["Engineer", "Intern", "I am finished building my team"],
    },
  ];
  inquirer.prompt(roleQuestion).then((response) => {
    const role = response.role;
    switch (role) {
      case "Engineer":
        engineerCard();
        break;
      case "Intern":
        internCard();
        break;
      default:
        writeHTML();
    }
  });
}

function engineerCard() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGitHub
    );
    team.push(engineer);
    employeeID.push(answers.engineerId);
    employeeRole();
  });
}

function internCard() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    team.push(intern);
    employeeID.push(answers.internId);
    employeeRole();
  });
}

function writeHTML() {
  fs.writeFile("index.html", render.generateHTML(team), (err) => {
    err ? console.log(err) : console.log("index.html generated");
  });
  console.log(team);
}

init();
