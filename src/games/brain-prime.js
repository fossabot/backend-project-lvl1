import start, { getRndNumInRange, cons } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 0;
const maxNum = 30;

const isEven = (num) => {
  if (!num) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameData = () => {
  const question = getRndNumInRange(minNum, maxNum);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
