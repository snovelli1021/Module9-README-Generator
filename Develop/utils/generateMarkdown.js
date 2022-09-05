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
      text = "https://img.shields.io/badge/license-MIT-blue";
      break;
    case 1:
      text = "https://img.shields.io/badge/license-GPL-blue";
      break;
    case 2:
      text = "https://img.shields.io/badge/license-Apache%202.0-blue";
      break;
    case 3:
      text = "";
    break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Content
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[!License](#License)(https://img.shields.io/badge/license-${data.license}-blue)
  -[Contribution](#Contribution)
  -[Tests](#Tests)
  -[Questions](#Questions)

   
##Description:
${data.Description}
    
##Installation:
${data.Installation}
    
##Usage:
${data.Usage}
    
##License:
${data.License}
    
##Contribution:
${data.Contribution}
    
##Test:
${data.Test}
    
##Questions:
${data.Questions}
  Github: [${data.Github}](https://github.com/${data.Github})
  Please email me at the address below for any additional questions.
  EMail: [${data.Email}]`;
}

renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();

module.exports = generateMarkdown;

