// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
    ${data.desc}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Credits
    ${data.credits}

`;
}

module.exports = generateMarkdown;
