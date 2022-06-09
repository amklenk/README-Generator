// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return " "
  }
  if(license === "MIT"){
   return `
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  `
  } else if (license === "ISC"){
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `
  } else if (license === "Apache"){
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  } else if (license === "BSD"){
    return `
    [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    `
  } else  {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `
  }
};

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return " "
  }
  if(license === "MIT"){
    return `
    [License: MIT](https://opensource.org/licenses/MIT)
   `
   } else if (license === "ISC"){
     return `
     [License: ISC](https://opensource.org/licenses/ISC)
     `
   } else if (license === "Apache"){
     return `
     [License](https://opensource.org/licenses/Apache-2.0)
     `
   } else if (license === "BSD"){
     return `
     [License](https://opensource.org/licenses/BSD-2-Clause)
     `
   } else  {
     return `
     [License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)
     `
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return " "
  }
  return `
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
//this is like the template.js in portfolio-generator
function generateMarkdown(data) {
//do I need to restructure
  // const { projects, about, ...header } = templateData;

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Links](#links)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How-to-Contribute](#how-to-contribute)

  ## Installation
  ${data.steps}

  ## Links
  - ${data.github}
  - ${data.site}

  ## Usage
  ${data.usage}

  ## Credits
  - ${data.collaborators}

  ## License
  ${renderLicenseSection(license)}

  ## How to Contribute
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
