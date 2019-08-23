import start, { getRndNumInRange, cons } from '..';

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (from, step, indexOfHidden) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    result = i === indexOfHidden ? `${result} ...` : `${result} ${from + (step * i)}`;
  }
  return result;
};

const gameData = () => {
  const from = getRndNumInRange(0, 10);
  const step = getRndNumInRange(1, 10);
  const indexOfHidden = getRndNumInRange(0, progressionLength - 1);
  const question = getProgression(from, step, indexOfHidden);
  const rightAnswer = from + (step * indexOfHidden);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
