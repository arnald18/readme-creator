import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of the project?",
  },

  {
    name: "description",
    type: "input",
    message: "What's the description of your project?",
  },
  {
    name: "license",
    type: "list",
    message: "What license are you using?",
    choices: ["MIT", "ISC", "Apache 2.0"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
