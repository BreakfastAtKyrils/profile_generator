import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer1 = await rl.question('What is your name?');
const answer2 = await rl.question('What\'s an activity you like doing?');
const answer3 = await rl.question('What do you listen to while doing that?');
const answer4 = await rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)');
const answer5 = await rl.question('What\'s your favourite thing to eat for that meal?');
const answer6 = await rl.question('Which sport is your absolute favourite?');
const answer7 = await rl.question('What is your superpower? In a few words, tell us what you are amazing at!');

console.log(`${answer1} loves listening to ${answer3} while ${answer2},
  devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport,
  and is amazing at ${answer7}.`);

rl.close();