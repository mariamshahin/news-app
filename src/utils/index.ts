import _ from 'lodash';

export const shuffle = (arr: Array<any>, count: number) => {
  const shuffledArr = _.shuffle([...arr]);
  return _.take(shuffledArr, count);
};
