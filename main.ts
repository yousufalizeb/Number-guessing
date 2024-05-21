#! /usr/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1 to 10:",
  },
]);
console.log(answers);

if (answers.userGuessedNumber === randomNumber) {
  console.log("congratulation! you guessed right  ");
} else {
  console.log(" you guessed wrong");
}
