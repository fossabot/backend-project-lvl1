import readlineSync from 'readline-sync';

const getRndNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Pair logic
const cons = (first, second) => (carOrCdr) => {
  switch (carOrCdr) {
    case 'car':
      return first;
    case 'cdr':
      return second;
    default:
      return `Error! ${carOrCdr} should to be 'car' or 'cdr'`;
  }
};
const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

const correctAnswerInRow = 3;


export default (gameRules, gameData) => {
  console.log(`Welcome to the Brain Games!\n${gameRules}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  for (let correctCount = 0; correctCount < correctAnswerInRow; correctCount += 1) {
    const getGameData = gameData();
    const question = car(getGameData);
    const rightAnswer = String(cdr(getGameData));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  getRndNumInRange,
  cons,
  car,
  cdr,
};
