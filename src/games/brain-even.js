import start, { getRndNumInRange, cons } from '..';

const rules = ('Answer "yes" if number even otherwise answer "no".');

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');


const gameData = () => {
  const question = getRndNumInRange(0, 20);
  const rightAnswer = isEven(question);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
