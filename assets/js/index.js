// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();