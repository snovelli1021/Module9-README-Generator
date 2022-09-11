// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT" || license === "GPL" || license === "Apache-2.0" || license === "None") {
    console.log(license);
    return `![The name of the license](https://shields.io/category/license/${license.name})`;
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPL":
      return "https://opensource.org/licenses/GPL-3.0";
    case "Apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    default:
      return ""; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseSection(data.License)}
  # Table of Content
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [Video](#Video)

   
## Description:
${data.Description}
    
## Installation:
${data.Installation}
    
## Usage:
${data.Usage}
    
## License:
${data.License}
[License](${renderLicenseLink(data.License)})
    
## Contribution:
${data.Contribution}
    
## Test:
${data.Test}
    
## Questions:
  Please find my contact details below. <br/>
  Github: https://github.com/${data.Github} <br/>
  EMail: ${data.Email}

## Video:
[Screencastify Video](https://drive.google.com/file/d/1cs1im-W5NSfhCJ3iAKZ-Hmwkvzms3Ubl/view)`;
}




renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();

module.exports = generateMarkdown;

