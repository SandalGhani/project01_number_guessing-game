#!/usr/bin/env node
import inquirer from "inquirer";
//1) computer will genrate a rendom number
// 2) User input for guessing number
// 3) compare user with computer genrated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-10:",
  },
]);
if (answers.userGuessNumber === randomNumber) {
  console.log("congratulations! you guessed right number");
} else {
  console.log("Sorry you guess a wrong number");
}