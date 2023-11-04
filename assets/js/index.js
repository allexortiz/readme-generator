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
    type: 'list',
    message: 'What is your README badge? (Required)',
    name: 'license',
    choices: ['Apache-2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None']

}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => console.log(err))
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions)
    .then((data) =>{
        writeToFile('My-ReadME.md', generateMarkdown(data))
    }

    )
    .catch(err => console.log(err))
}

// Function call to initialize app
init();