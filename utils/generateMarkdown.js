//function to render the license badge
function renderLicenseBadge(license) {
  if (!license) {
    return " ";
  }
  if (license === "MIT") {
    return `
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  `;
  } else if (license === "ISC") {
    return `
  ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
    `;
  } else if (license === "APACHE 2.0") {
    return `
  ![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
    `;
  } else if (license === "BSD") {
    return `
  ![License: BSD](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)
    `;
  } else {
    return `
  ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
    `;
  }
}

//function to render the license link
function renderLicenseLink(license) {
  if (!license) {
    return " ";
  }
  if (license === "MIT") {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "ISC") {
    return `[License: ISC](https://opensource.org/licenses/ISC)`;
  } else if (license === "APACHE 2.0") {
    return `[License](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "BSD") {
    return `[License](https://opensource.org/licenses/BSD-2-Clause)`;
  } else {
    return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

//function to render the license section with explanation and link
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  }
  return `The badge at the top of the page shows that this project is licensed under ${license}. The link for that license is shown below.
- ${renderLicenseLink(license)}`;
}

//function to render the site link, if the user enters one
function renderPageLink(site) {
  if (site === " ") {
    return " "
  } else {
    return `- [Page Link](${site})
    `
  }
}

//function that contains the template for the markdown file and generates markdown within the created file
function generateMarkdown(data) {
var readme = data;
  return `

# ${readme.title}    ${renderLicenseBadge(readme.license)}
## Description
${readme.description}
## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${readme.steps}
## Links
- [GitHub Repository](${readme.github})
${renderPageLink(readme.site)}
## Usage
${readme.usage}
## Credits
- Collaborators: ${readme.collaborators}
## License
${renderLicenseSection(readme.license)}
## How to Contribute
${readme.contribution}
## Tests
To test the functionality of the site, please use ${readme.test}.
## Questions
Please direct any questions to ${readme.email}. To see more projects, visit the link below for ${readme.name}'s respository: 
- [GitHub Repository](https://github.com/${readme.name})
`;
}

//export
module.exports = generateMarkdown;
