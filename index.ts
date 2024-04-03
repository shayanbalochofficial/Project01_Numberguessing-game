#! /usr/bin/env node

import inquirer from "inquirer";

//! Printing  Message
console.log("\n\tWelcome To Shayan Baloch's - CLI Number Guessing Game \n");

//!  Generating Numbers
const randomNumber = Math.floor(Math.random() * 15 + 1);

const guessedNumber = await inquirer.prompt([
  {
    type: "input",
    name: "guess",
    message: "Enter a number between 1 and 15",
  },
]);

//!  Checking if the number is correct
if (randomNumber > guessedNumber.guess) {
  console.log("Your Guessed Number is too low. The Number was ", randomNumber);
} else if (randomNumber < guessedNumber.guess) {
  console.log("Your Guessed Number is too high. The Number was ", randomNumber);
} else {
  console.log(
    "Congrats! You guessed the correct number. The Number was ",
    randomNumber
  );
}
console.log(
  '\n\n\tThanks for using this Game!\n\tIt\'s a game created by "Shayan Baloch"'
);
