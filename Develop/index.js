// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [];
// finish writing questions-SN
function readmeGenPrompt() {
    console.log(inquirer.prompt)
    inquirer.prompt([
        {
            name: "license",
            type: "input",
            message: "What is your Github username?"
        },
        {
            name: "license",
            type: "input",
            message: "Acceptance Criteria messages"
        },
        {
            name: "license",
            type: "input",
            message: "Acceptance Criteria messages"
        },
    ])
    .then((answers) => console.log(answers))
    .catch((err) => console.error(err))
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    readmeGenPrompt()
}

// Function call to initialize app
init();
