// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `[![License](https://img.shields.io/badge/${license}-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `(https://opensource.org/licenses/${license})`
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
  return `## ${data.title}
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;


//License-Apache_2.0-blue
//Apache-2.0