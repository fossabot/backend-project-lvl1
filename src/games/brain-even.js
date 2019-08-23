import start, { getRndNumInRange, cons } from '..';

const rules = ('Answer "yes" if number even otherwise answer "no".');

const isEven = (num) => (num % 2 === 0 ? 'no' : 'yes');

const minNum = 0;
const maxNum = 20;

const gameData = () => {
  const question = getRndNumInRange(minNum, maxNum);
  const rightAnswer = isEven(question);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
