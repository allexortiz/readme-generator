// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your repository? (Required)',
    name: 'title',

    //make sure title is typed
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your repository title.');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is the description of your repository? (Required)',
    name: 'description',

    //make sure description is typed
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description of the repository.');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Are there any installation instructions?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Please provide usage information.',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please provide contribution guidelines.',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Please provide test instructions.',
    name: 'tests',
},
{
    type: 'list',
    message: 'Please choose a license for your application.',
    name: 'license',
    choices: ['Apache-2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None']
},
{
    type: 'input',
    message: 'What is your GitHub username? (Required)',
    name: 'github',
    
    //make sure GitHub is entered
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description of the repository.');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is your email address? (Required)',
    name: 'email',

    //make sure email is entered
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description of the repository.');
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => console.log(err))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data))
        }

        )
        .catch(err => console.log('README.md successfully created!'))
}

// Function call to initialize app
init();