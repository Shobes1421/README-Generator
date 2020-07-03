function generateMarkdown(data) {
  return `
# ${data.title}

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[Contributing](#contributing)

*[Tests](#tests)

*[Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

${renderLicense(data.license)}

## Contributing

${data.contrib}

## tests

${data.tests}

## Questions

If you have any questions, open an issue or contact me via github:[${data.github}](https://github.com/${data.github}) or Email: ${data.email}

`;
}

function renderLicense(license) {
  if (license === "None"){ 
    return "";
  } else {
    return `## License
    
  ${license}`
    
  
  }
}

/***
{
  title: 'test',
  description: 'tested',
  install: 'npm install',
  usage: 'npm start',
  license: 'MIT',
  contrib: 'dudes',
  tests: 'npm test'
}
*/


module.exports = generateMarkdown;
