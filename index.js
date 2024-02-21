import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of the project?",
  },
];

inquirer.prompt(questions);
