"use strict";

//declaring variables
const myName = "Jenny";
const age = "27";
const birthday = "April 9";
const detroitGC = true;
const lifeEvents = [
  "I have three kids",
  "I've been married for 5 years",
  "I went to Oakland University and studied English with Secondary Education",
  "I love coffee",
];

//if/else statement
if (detroitGC === true) {
    console.log (`My name is ${myName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log (`My name is ${myName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

//loop

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

//while loop
let counter = 0;

while (true) {
  let randomNumber = Math.ceil(Math.random() * 10);

  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !===5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
