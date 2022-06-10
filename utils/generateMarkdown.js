// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  license = data.license;
  if (!data.license) {
    return " ";
  }
  if (data.license == "MIT") {
    return `
   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  `;
  } else if (license == "ISC") {
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `;
  } else if (license == "Apache") {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `;
  } else if (license == "BSD") {
    return `
    [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    `;
  } else {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  var license = data.license;
  if (!license) {
    return " ";
  }
  if (license === "MIT") {
    return `
    [License: MIT](https://opensource.org/licenses/MIT)
   `;
  } else if (license === "ISC") {
    return `
     [License: ISC](https://opensource.org/licenses/ISC)
     `;
  } else if (license === "Apache") {
    return `
     [License](https://opensource.org/licenses/Apache-2.0)
     `;
  } else if (license === "BSD") {
    return `
     [License](https://opensource.org/licenses/BSD-2-Clause)
     `;
  } else {
    return `
     [License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)
     `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var license = data.license;
  if (!license) {
    return " ";
  }
  return `
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
//this is like the template.js in portfolio-generator
function generateMarkdown(data) {
  const { license, ...readme } = data;

  return `

# Project Title - ${readme.title}

## Description
${readme.description}
  
## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How-to-Contribute](#how-to-contribute)
  
## Installation
${readme.steps}
  
## Links
- [GitHub Repository](${readme.github})
- [Page Link](${readme.site})
  
## Usage
${readme.usage}
  
## Credits
- ${readme.collaborators}
  
## How to Contribute
${readme.contribution}
`;
}

module.exports = generateMarkdown;
