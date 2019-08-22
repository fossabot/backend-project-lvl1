import start, { getRndNumInRange, cons } from '..';

const rules = 'What is the result of the expression?';
const signs = '+-*';
const calculateExpression = (firstNum, secondNum, sign) => {
  switch (sign) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return `Error! '${sign}' is wrong sign.`;
  }
};

const gameData = () => {
  const firstNum = getRndNumInRange(0, 11);
  const secondNum = getRndNumInRange(0, 11);
  const sign = signs[getRndNumInRange(0, signs.length)];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const righAnswer = calculateExpression(firstNum, secondNum, sign);
  return cons(question, righAnswer);
};

export default () => start(rules, gameData);
