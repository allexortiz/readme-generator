// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } else if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return '';
  } else {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }
}
//[![License](https://img.shields.io/badge/Apache_2.0.svg)](https://opensource.org/licenses/Apache-2.0)
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
## ${data.title}
${renderLicenseSection(data.license)}
  
## Description
${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under ${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions or inquiries about this application, you can reach me at ${data.email} or you can find me on GitHub @ (https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;


//License-Apache_2.0-blue
//Apache-2.0