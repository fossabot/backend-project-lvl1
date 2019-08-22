import start, { getRndNumInRange, cons } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

// euclid algorithm for getGcd
const getGcd = (a, b) => (!a ? a : getGcd(b, a % b));

const gameData = () => {
  const firstNum = getRndNumInRange(0, 11);
  const secondNum = getRndNumInRange(0, 11);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = getGcd(firstNum, secondNum);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
