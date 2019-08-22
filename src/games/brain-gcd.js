import start, { getRndNumInRange, cons } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => {
  if (firstNum > secondNum) return getGcd(secondNum, firstNum);
  if (!secondNum) return `${firstNum}`;
  return getGcd(secondNum, secondNum % firstNum);
};

const gameData = () => {
  const firstNum = getRndNumInRange(0, 11);
  const secondNum = getRndNumInRange(0, 11);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = getGcd(firstNum, secondNum);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
