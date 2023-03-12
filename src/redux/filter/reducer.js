import { SET_FILTER } from './constants';

export const filterReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;
    default:
      return store;
  }
};

export const initialStore = '';
