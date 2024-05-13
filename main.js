#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//1) computer will genrate a rendom number
// 2) User input for guessing number
// 3) compare user with computer genrated number and show result
var randomNumber = Math.floor(Math.random() * 10 + 1);
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congratulations! you guessed right number");
}
else {
    console.log("Sorry you guess a wrong number");
}
