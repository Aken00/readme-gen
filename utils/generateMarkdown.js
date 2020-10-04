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
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}  
  
  > ![${data.altScreen || ''}](${data.pathScreen || ''}) 

  ## Credits
  ${data.collabName || ''}  

  ${data.link || ''}

  ## License
  Copyright (c) ${data.name}. All rights reserved.  

  This application is licensed under ${data.license}

  ## Contributing
  ${data.contributing || ''}

  ## Tests
  ${data.tests}

  ## Questions
  * GitHub Username: ${data.githubName}  
  * [GitHub Profile](https://www.github.com/${data.githubName})
  * Please email me at ${data.email} with any questions you may have. I'm always here to help!
  `;
}

module.exports = generateMarkdown;
