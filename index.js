// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
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
        message: "What are the steps required to install your project? (Required)",
        validate: stepsInput => {
            if(stepsInput) {
                return true;
            } else {
                console.log("Please enter the steps a user needs to take to install your project!");
                return false;
            }
        }
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

// TODO: Create a function to write README file
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

// TODO: Create a function to initialize app
//function that deploys inquirer
function init() {
    inquirer.prompt(questions)
    .then(answers=> {
        return generateMarkdown(answers);
    })
    .then((answers)=>{
        var data = answers;
        var fileName = "README.md";
        console.log("Your README has been created in the dist folder!")
        return writeToFile(fileName, data);
    })
.catch(err => {
    console.log(err);
  });
}

// function call
init();