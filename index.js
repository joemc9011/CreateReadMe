// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


const inquirer = require("inquirer");
const fs = require("fs");
const generatorMarkdown = require("./Utils/generateMarkdown.js");



inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Project description:",
    },
    {
        type: "input",
        name: "instructions",
        message: "Installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Contributions:",
    },
    {
        type: "input",
        name: "test",
        message: "Test Instructions:",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub Username",
    },
    {
        type: "list",
        name: "license",
        message: "Application license:",
    },
    {
        type: "input",
        name: "github",
        message: "Github Url:",
    },
    {
        type: "input",
        name: "email",
        message: "Email",
    },
])

function writeMarkdown(fileName, data) {
    fs.writeToFile("readme.md" + fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(fileName + " is a success!");
    })
}

function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeMarkdown("readme.md", generatorMarkdown(data));
    })
}

init();