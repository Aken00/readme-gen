// global const require variables
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user using inquirer
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name or company name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name or company name!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of application? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your application. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter application description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the steps to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use of the application. Include screenshots as needed. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples of your application!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'screenConfirm',
            message: 'Do you want to include screenshots of your application?',
            default: false
        },
        {
            type: 'input',
            name: 'altScreen',
            message: 'Enter alt text for screenshot. This will assist with accessbility.',
            when: ({ screenConfirm }) => {
                if (screenConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'pathScreen',
            message: 'Enter the file path of where in your repo the screenshot is saved.',
            when: ({ screenConfirm }) => {
                if (screenConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'creditLinks',
            message: 'Did you work with any collaborators on your application? (Required)',
            default: false
        },
        {
            type: 'input',
            name: 'collabName',
            message: 'Enter the collaborators full name.',
            when: ({ creditLinks }) => {
                if (creditLinks) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub profile links for your collaborators.',
            when: ({ creditLinks }) => {
                if (creditLinks) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What licenses did you use for your application? (Check all that apply) ',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you created an application and would like other developers to contribute, please provide any guidelines.',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please provide guidelines for contributors!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide tests for your application and examples on how to run them.',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please provide tests and examples of how to run them!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your GitHub username? (Required)',
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        },
    ]);
};

// function to write README file
function writeToFile(fileName, questions) {
    fileName = fs.writeFile('Generate.md', generateMarkdown((questions)), function (err) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('= README created as Generate.md! =');
        }
    });
};
// function to initialize program
function init() {
    questions()
        .then(data => {
            console.log(data);
            writeToFile('Generate.md', data);
    });
};

// function call to initialize program
init();
