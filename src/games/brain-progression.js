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

const minFromNum = 0;
const maxFromNum = 10;
const minStepNum = 1;
const maxStepNum = 10;
const minIndexOfHidden = 0;
const maxIndexOfHdden = progressionLength - 1;

const gameData = () => {
  const from = getRndNumInRange(minFromNum, maxFromNum);
  const step = getRndNumInRange(minStepNum, maxStepNum);
  const indexOfHidden = getRndNumInRange(minIndexOfHidden, maxIndexOfHdden);
  const question = getProgression(from, step, indexOfHidden);
  const rightAnswer = from + (step * indexOfHidden);
  return cons(question, rightAnswer);
};

export default () => start(rules, gameData);
