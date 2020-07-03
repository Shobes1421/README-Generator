const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
    type: "input",
    name: "github",
    message: "What is your Github profile username?",
    },
    {
    type: "input",
    name: "email",
    message: "What is your Email?",
    },

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
    choices: ["MIT", "GLP", "None"],
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

//*** 
const test = {
    github: 'shobes1421',
    email: 'Shobes1421@hotmail.com',
    title: 'test',
    description: 'tested',
    install: 'npm install',
    usage: 'npm start',
    license: 'MIT',
    contrib: 'dudes',
    tests: 'npm test'
}
//***


function init() {
    writeToFile("README.md", generateMarkdown(test));
    
    //inquirer
        //.prompt(questions)
        //.then(answers => {
            //console.log(answers);
            //writeToFile("README.md", "testing");
        //})
    
}

init();

