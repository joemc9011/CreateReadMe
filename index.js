const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Utils/generateMarkdown.js");
const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Project description:",
        },
        {
            type: "input",
            name: "installation",
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
            type: "list",
            name: "license",
            message: "Application license:",
            choices: [
                "MIT",
                "GPL",
                "MLP",
                "None"
            ]
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
    ]
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("readme.md", generateMarkdown(data));
        })
}
init();