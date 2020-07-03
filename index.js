const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
    type: "input",
    name: "Title",
    message: "What is the name of your project?",
    },
    
    {
    type: "input",
    name: "description",
    message: "Description of the project",
    },
    
    {
    type: "input",
    name: "install",
    message: "What is the installation instructions?",
    default: "npm install",
    },

    {
    type: "input",
    name: "usage",
    message: "What are the directions to use the project?",
    default: "npm start",
    },
    {
    type: "list",
    name: "license",
    message: "What license is the project under?",
    default: "MIT",
    choices: ["MIT", "GLP"],
    },

    {
    type: "input",
    name: "contrib",
    message: "Who are the authors of this project? (insert names seperated by comas)",
    },

    {
    type: "input",
    name: "tests",
    message: "How do you test the project?",
    default: "npm test",
    },


];

function writeToFile(fileName, data) {
    fs.writeFileSync("./output/" + fileName, data);
}

function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            //writeToFile("README.md", "testing");
        })
    
}

init();

