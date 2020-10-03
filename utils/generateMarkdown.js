// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.creditLinks}
  ${data.link}

  ## License
  Copyright (c) ${data.name}. All rights reserved.
  This application is licensed under ${data.license}

  ## Tests
  ${data.tests}

  ## Questions
  * Github Username: ${data.githubName}
  * [GitHub Profile](https://www.github.com/${data.githubName})
  
  * Please email me at ${data.email} with any additional questions if you have any. I'm always here to help!
  `;
}

module.exports = generateMarkdown;
