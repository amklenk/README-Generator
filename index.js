//requirements
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

//mockData object to append template for generated file (for development)
const mockData = {
name: "amklenk",
title: "Workout Zen",
description: "This application was designed to help someone new to exercising learn new exercises in a low stress environment.",
steps: "Visit the GitHub repository, Workout-Zen (see the link below), to fork and clone the repository. The site is published on GitHub pages.",
github: "https://github.com/amklenk/Workout-Zen",
site: "https://amklenk.github.io/Workout-Zen",
usage: "The site is navigable via clicking the muscle buttons, each exercise, and the go back button to return to the index page. Each exercise has a heart, which when clicked, allows the user to save the exercise as a favorite to the favorite section using local storage. The user can then press the clear button to clear the exercises and local storage.",
collaborators: "Mtende Roll, Hannah Nicks, Colin Alexander",
license: "MIT",
contribution: "Please fork and clone the repository and use a pull request to add or make changes to the current repository.",
test: "Mocha",
email: "amandamklenk3@gmail.com"
};

//an array of the questions to feed through inquirer.prompt
const questions =
[
    {
        type: "input",
        name: "name",
        message: "What is your GitHub username? (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter your username on GitHub!");
                return false;
            } 
        }
    },
    {
     type: "input",
     name: "title",
     message: "What is the title of your project? (Required)",
     validate: titleInput => {
         if(titleInput) {
             return true;
         } else {
             console.log("Please enter the title of your project!");
             return false;
         }
     }
    },
    {
        type: "input",
        name: "description",
        message: "Please give a short description of why you built this project and any problems it solves. (Required)",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("Please enter a short description of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "steps",
        message: "What are the steps required to install your project?",
        default: "No specialized instructions required."
    },
    {
        type: "input",
        name: "github",
        message: "What is the url of the GitHub repository for this project? (Required)",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log("Please enter the url of your project's repository!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "site",
        message: "What is the url of your project's live site (if there is one)?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project? (Required)",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("Please enter the usage of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "collaborators",
        message: "Please list any collaborators on your project.",
        default: "None"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices:["MIT", "ISC", "APACHE 2.0", "BSD", "GPL 3.0"]
    },
    {
        type: "input",
        name: "contribution",
        message: "Is there a way that another programmer can contribute? (Required)",
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log("Please enter how other programmers can contribute to your project!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "test",
        message: "Which of the following would someone use to test your site?",
        choices:["Jest", "Turbo Data", "Grunt", "Mocha", "Karma"]
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address. (Required)",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter the usage of your project!");
                return false;
            }
        }
    }
];

//function that writes the file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) =>{
        //does this make sense? fileName isn't exactly a pathway...
        fs.writeFile("./dist/" + fileName, data, err=>{
            if (err){
                reject(err);
                return;
            }
            //if resolves, send successful data to then method
            resolve({
                ok: true,
                message:"File created!"
            });
        });
    });
};

//function that deploys inquirer and uses promise chain to send the answers to generateMarkdown and writeToFile
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log("Your README has been created in the dist folder!")
        writeToFile("README.md", generateMarkdown(answers))
    })
    .catch(err =>
        console.log(err));
}

// function call
init();

//Function to use mockData
// writeToFile("README.md", generateMarkdown(mockData));