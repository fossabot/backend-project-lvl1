import start, { getRndNumInRange, cons } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const minNum = 0;
const maxNum = 10;

// euclid algorithm for getGcd
const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const gameData = () => {
  const firstNum = getRndNumInRange(minNum, maxNum);
  const secondNum = getRndNumInRange(maxNum, maxNum);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = getGcd(firstNum, secondNum);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
