const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            message: 'Enter description of your application. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter description of your application!');
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
            message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
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
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles. (Required) ',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please provide credits and links, if any!');
                    return false;
                }
            }
        },
    ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    questions();
}

// function call to initialize program
init();
