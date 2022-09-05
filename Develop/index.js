// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [];
function readmeGenPrompt() {
    console.log(inquirer.prompt)
    inquirer.prompt([
        {
            name: "Title",
            type: "input",
            message: "What is the title of your project?",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "Description",
            type: "input",
            message: "Please describe your application.",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "Installation",
            type: "input",
            message: "How do you install your application?",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "Usage",
            type: "input",
            message: "How do you use your application?",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "License",
            type: "list",
            message: "Which license does your application use?",
            choices: ["MIT", "GPL", "Apache-2.0", "None"],
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "Contribution",
            type: "input",
            message: "Who or what has contributed to your application?",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "Test",
            type: "input",
            message: "Test Instructions",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "Github",
            type: "input",
            message: "What is your Github username?",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "Email",
            type: "input",
            message: "What is your email address?",
            validate: (value)=> { if(value){return true} else {return "Please add a valid email."}},
        },
    ])
    .then((answers) => console.log(answers))
    .catch((err) => console.error(err))
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Creating your README has completed!')
});
};


// TODO: Create a function to initialize app
function init() {
    readmeGenPrompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Generating README");
        writeToFile("./output/README.md", generateMarkdown(inquirerResponse, data));
    })
    .catch((err) => {
        console.log(err);
    });
};
// Function call to initialize app
init();
