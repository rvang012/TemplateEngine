const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employeeArray = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const questions = [
    {type: "input", name: "name", message: "What is your name?"}, 
    {type: "input", name: "id", message:"What is your ID number?"},
    {type: "input", name: "email", message: "What is your email?"},
    {type: "list", name: "roles", message: "What is your role?", choices: ["Engineer", "Manager", "Intern",]
}
];

const engineerQuestions = [
    {
        type: "input", 
        name: "Github", 
        message: "What is your gibhub?"
    }
]

const managerQuestions = [
    {
        type: "input", 
        name: "officenumber", 
        message: "What is your office number",
    }
];

const internQuestion = [
    {
        type: "input", 
        name: "college", 
        message: "what is your current college",
    }
];

if(role === "Manager"){
    inquirer.prompt(managerQuestions);
} else if(role === "Engineer") {
    inquirer.prompt(engineerQuestions);
}else if(role === "Intern"){
    inquirer.prompt(internQuestion);
}
employeeArray.push()
function askForNextEntry(){
    inquirer.prompt = [{
        type: "confirm",
        name: "addNewEmployee",
        message: "Do you wish to add another Employee?",
        default: Boolean,
    }]
    
    if(askForNextEntry === "Yes"){

    }else {}
}




let employee = true;
while (employee) {
const html = render(employeeArray);

function newEmployee() {
    const newEmployee = new Employee(employeeConfigObj);
    employeeArray.push(newEmployee);
    askForNextEntry();
    console.log(newEmployee);
}
function newEngineer() {
    const newEngineer = new Engineer(employeeConfigObj);
    employeeArray.push(newEngineer);
    askForNextEntry();
    console.log(newEngineer);
}
function newIntern() {
    const newIntern = new Intern(employeeConfigObj);
    employeeArray.push(newIntern);
    askForNextEntry();
    console.log(newIntern);
}
function newManager() {
    const newManager = new Manager(employeeConfigObj);
    employeeArray.push(newManager);
    askForNextEntry();
    console.log(newManager);

function createHtmlFile(html){
    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, html);
}
inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
]);

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
