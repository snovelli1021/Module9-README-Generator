// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [];
function readmeGenPrompt() {
    console.log(inquirer.prompt)
    inquirer.prompt([
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
            type: "input",
            message: "What license does your application use?",
            choices: ["MIT", "GPL", "Apache-2.0", "lgpl_2_1", "None"],
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
            // What is "test instructions"
            message: "Test Instructions",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "github",
            type: "input",
            message: "What is your Github username?",
            validate: (value)=> { if(value){return true} else {return "Please add a valid username."}},
        },
        {
            name: "email",
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
fs.writeFile(`./${fileName.tolowercase().split(" ").join("")}.md`,data,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Your README has been created!");
})
}

// TODO: Create a function to initialize app
function init() {
    readmeGenPrompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Generating README");
        fs.writeFileSync("README.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}
// Function call to initialize app
init();
writeToFile();
generateMarkdown();
