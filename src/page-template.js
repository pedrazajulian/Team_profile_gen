const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");


//Create Engineer Card
const generateEngineer = function(Engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info">
                <h2>Engineer</h2>
                <h3>${Engineer.getName()}</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${Engineer.getId()}</p>
                <p class="email">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
                <p class="github">Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></p>
            </div>
        </div>
    </div>
    `
};

//Create Intern Card
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info">
                <h2>Intern</h2>
                <h4>${intern.getName()}</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.getId()}</p>
                <p class="email">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="school">School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div>
    `
};

//Create Manager Card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-info">
                <h2>Manager</h2>
                <h4>${manager.getName()}</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.getId()}</p>
                <p class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="officeNum">Office Number: ${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
    `
};

//Putting The Information On The Page
generateHTML = (data) => {

//Building Cards
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

//Generating Engineer
        if (role === "Engineer") {
            const engineer = generateEngineer(employee);

            pageArray.push(engineer);
        };

//Generating Intern
        if (role === "Intern") {
            const intern = generateIntern(employee);

            pageArray.push(intern);
        };

//Generating Manager
        if (role === "Manager") {
            const manager = generateManager(employee);

            pageArray.push(manager);
        };
    
    };

//Joining Different Cards
    const employees = pageArray.join('');

//Generating Team With Cards
    const generateTeam = generateTeamPage(employees); 
    return generateTeam;

};

//Generating Page
const generateTeamPage = function (employees) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coding Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container">
                <h1 class="display-3"><strong>Coding Team</strong></h1>
            </div>
        </div>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employees}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `
  };
  
  //Exporting Information
  module.exports = generateHTML;