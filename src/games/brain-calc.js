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

const minNum = 0;
const maxNum = 10;
const minSignIndex = 0;
const maxSignIndex = signs.length - 1;

const gameData = () => {
  const firstNum = getRndNumInRange(minNum, maxNum);
  const secondNum = getRndNumInRange(minNum, maxNum);
  const sign = signs[getRndNumInRange(minSignIndex, maxSignIndex)];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const righAnswer = calculateExpression(firstNum, secondNum, sign);
  return cons(question, righAnswer);
};

export default () => start(rules, gameData);
