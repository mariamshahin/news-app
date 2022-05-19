import { Post } from 'app/types';
import _ from 'lodash';

export const shuffle = (arr: Array<any>, count: number) => {
  const shuffledArr = _.shuffle([...arr]);
  return _.take(shuffledArr, count);
};

export const findPost = (arr: Array<Post>, slug: string) => {
  return _.find(arr, (post) => post.title.replace(/\s+/g, '-') === slug);
};
