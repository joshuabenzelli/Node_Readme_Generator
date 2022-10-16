const inquirer = require("inquirer");
const fs = require("fs");


const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is a brief description of your project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
};

const generateReadme = ({ name, description, github, email }) =>
  `
# README Generated for ${name}!

## Table of contents:
    * 1: Description

    * 2: Github

    * 3: Email

## Description:
    ${description}

## Github: [${github}](https://github.com/${github})
  
### Feel free to email me with any questions or concerns at ${email}!
  
  `;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync("README.md", generateReadme(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

init();
