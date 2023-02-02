'use strict';

import Massindex from './Massindex.js';
import Driver from './Driver.js';

const mark = new Massindex('Mark', 95, 1.88);
const john = new Massindex('John', 98, 1.68);

const markBMI = mark.calculateBmi();
const johnBMI = john.calculateBmi();

let markHigherBMI = markBMI > johnBMI ? true : false;
console.log('markHigherBMI: ' + markHigherBMI);

console.log(mark);

/**
 *
 * Function expressions cannot be
 * called before they are declared
 */

// const age = calcAge(1991);

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

// ARRAYS

const friends = ['jay', 'jones', 'james'];

const jay = friends.includes('jay');

if (jay) console.log(`${friends[0]} is available`);

// OBJECTS
let name = 'Jonas';
let occupation = 'teacher';
let year_of_birth = 1992;

const driver = new Driver(name, occupation, year_of_birth);

// driver["yob"] = 2010;

console.log(
  `${driver.name} is a ${driver.calcAge()}-year old ${
    driver.occupation
  }, and he has ${driver.hasLicense() ? 'a' : 'no'} driver's license`
);

// LOOPS
for (let i = 1; i < 4; i++) {
  console.log(`-------- Starting exercise ${i}`);

  for (let j = 1; j < 6; j++) {
    console.log(`lifting weight repetition ${j}`);
  }
}
