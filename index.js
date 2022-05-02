// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation guidelines for your project (Required)',
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
        message: 'Provide a description of how to use your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter usage info');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines for your project. (Required)',
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
        message: 'Provide test instructions for your project. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your test instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github URL? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github URL');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email where users can contact you? (Required)',
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
        message: 'Choose a license for your appilcation',
        choices: ['MIT', 'BSD 3-Clause', 'Apache', 'GNU GPL v3', 'none']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(data);
    //assign var to generateMarkdown readme template page
    const generatePage = require('./utils/generateMarkdown');
    //assign var to generatePage with question data passed in
    const page = generatePage(data);
    //'testdata' is placeholder for what will be your template
    fs.writeFile(fileName, page, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('page created!');
    })
};

// TODO: Create a function to initialize app
function init() {
    //get questions data from inquirer
    return inquirer.prompt(questions).then(function (data) {
        //call writeToFile function passing in a title for the file and the questions
        writeToFile('newREADME.md', data);
    })

}

// Function call to initialize app
init();