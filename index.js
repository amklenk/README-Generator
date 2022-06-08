// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require ("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
"Can you give a short description of why you build this project and any problems it solves?",
"What are the steps required to install your project?",
"How do you use your project?",
"Do you have any collaborators or third-party assets? List their names here.",
 "Which license would you like to use?",
"Is there a way that another programmer can contribute?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
