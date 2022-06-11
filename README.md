# README-Generator

## Description

This project was created for a developer to quickly generate a high-quality, professional README. The user will fill out their information in a command-line application that is then inserted into a template to generate their README.

The following were the requirements of the project:
* When the user enters the project title, description, installation instructions, usage information, contribution guidelines, and test insrtuctions, this information will be displayed in the corresponding sections of the README.
* When the user chooses a license, the badge is shown at the top of the page and link for the license and a quick explanation will be displayed in the corresponding section of the README.
* When the user enters their GitHub username, it is shown in the Questions section along with a link to their repository on GitHub.
* When the user enters their email address, this is shown in the Questions section as a way for communication and further questions. 
* When the user clicks on the links in the Table of Contents, each link takes them to the 


WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

Repository contains a high-quality README with description and a link to walkthrough video.

Office Hours Questions: 
1. Array vs. inquirer function - FIXED
2. Are the licenses optional? How to make that optional in MD
3. Badge vs. site link
This is licensed with: 
badge

name: 'amklenk',
title: 'Workout Zen',
  description: 'This application was designed to help someone new to exercising learn new exercises in a low stress environment.',
  steps: 'Visit the GitHub repository, Workout-Zen (see the link below), to fork and clone the repository. The JSON file will have the necessary dependencies. The .gitignore file is set up in the root directory along with the index.js file that contains most of the command line code. The utils folder contains the generateMarkdown file, which contains the template for the README file and the module_export to index.js. The dist folder will contain the generated README.',
  github: 'https://github.com/amklenk/Workout-Zen',
  site: 'https://amklenk.github.io/Workout-Zen/',
  usage: 'The site is navigable via clicking the muscle buttons, each exercise, and the go back button to return to the index page. Each exercise has a heart, which when clicked, allows the user to save the exercise as a favorite to the favorite's section using local storage. The user can then press the clear button to clear the exercises and local storage.',
  collaborators: 'Mtende Roll, Hannah Nicks, Colin Alexander',
  license: 'MIT',
  contribution: 'Fork the repository and use a pull request.'
  email: 'amandamklenk3@gmail.com'

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
