import { SET_FILTER } from './constants';

export const setFilter = payload => {
  return { type: SET_FILTER, payload };
};
