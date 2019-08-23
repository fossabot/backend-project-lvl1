import start, { getRndNumInRange, cons } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

// euclid algorithm for getGcd
const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const gameData = () => {
  const firstNum = getRndNumInRange(0, 10);
  const secondNum = getRndNumInRange(0, 10);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = getGcd(firstNum, secondNum);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
