// function to generate markdown for README
function generateMarkdown(data) {
  const newLicenseName = data.license.replace(/ /g,"%20");
  return `
  # ${data.title}

  ![License](https://img.shields.io/badge/license-${newLicenseName}-blue.svg)

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
  ${data.collabName || ''} </br>
  ${data.link || ''}

  ## License
  Copyright (c) ${data.name}. All rights reserved. </br>
  This application is licensed under ${data.license}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub Username: ${data.githubName} </br>
  [GitHub Profile](https://www.github.com/${data.githubName}) </br>
  Please email me at ${data.email} with any questions you may have. I'm always here to help!
  `;
}

module.exports = generateMarkdown;
