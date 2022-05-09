// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project? (Required Input)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter description of what your project is. (Required Input)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Tell me the installation guidelines needed for your project (Required Input)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Now provide a description of how to use your project. (Required Input)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter usage info here');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution guidelines for your project. (Required Input)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide some test instructions for your project. (Required Input)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter some test instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github URL? (Required Input)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github URL/ maye your you put in the URL correctly');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a email where users can contact you? (Required Input)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Now choose a license for your appilcation that will be used',
        choices: ['MIT', 'BSD 3-Clause', 'Apache', 'GNU GPL v3', 'none']
    },
];

function writeToFile(fileName, data) {
    const generatePage = require('./utils/generateMarkdown');
    const page = generatePage(data);
    fs.writeFile(fileName, page, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('page created!');
    })
};

function init() {
    return inquirer.prompt(questions).then(function (data) {
        writeToFile('newREADME.md', data);
    })

}

// Function call to initialize app
init();