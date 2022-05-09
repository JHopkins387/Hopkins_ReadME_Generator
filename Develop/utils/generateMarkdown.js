
function renderLicenseBadge(data) {
  let licenseInput = `${data.license}`;
  if (licenseInput == 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (licenseInput == 'BSD 3-Clause') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (licenseInput == 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (licenseInput == 'GNU GPL v3') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    return '';
  }
}

function renderLicenseLink(data) {
  let licenseInput = `${data.license}`;
  if (licenseInput == 'MIT') {
    return "https://opensource.org/licenses/MIT"
  } else if (licenseInput == 'BSD 3-Clause') {
    return "https://opensource.org/licenses/BSD-3-Clause"
  } else if (licenseInput == 'Apache') {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (licenseInput == 'GNU GPL v3') {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else {
    return '';
  }
}

function renderLicenseSection() {
}

function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${renderLicenseBadge(data)}

 ## Table of Contents:

  - [Description](#Description)


  - [Installation](#Installation)

  - [Usage](#Usage)

  - [License](#License)

  - [Contributing](#Contributing)

  - [Tests](#tests)

  - [Questions](#Questions)

  ## Description: 
  ${data.description}

  ## Installation: 
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## License: 
  'This project is licensed under ${data.license}: ${renderLicenseLink(data)}

  ## Contributing: 
  ${data.contribution}

  ## Tests: 
  ${data.test}

  ## Questions: 
  ${data.github}

  Please feel free to reach out to me at ${data.email} with any additional questions, comments, or concerns!
`;
}

module.exports = generateMarkdown;