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

  switch (new license().getLicense()) {
    default:
      text = "Please pick a valid License";
      break;
    case 0:
      text = "MIT";
      break;
    case 1:
      text = "GPL";
      break;
    case 2:
      text = "Apache-2.0";
      break;
    case 3:
      text = "None";
    break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Content
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contribution](#Contribution)
  -[Tests](#Tests)
  -[Questions](#Questions)

    ${response.Description}
##Description:

    ${response.Installation}
##Installation:

    ${response.Usage}
##Usage:

    ${response.License}
##License:

    ${response.Contribution}
##Contribution:

    ${response.Test}
##Test:

    ${response.Questions}
  ##Questions:
  `;
}
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();

module.exports = generateMarkdown;

