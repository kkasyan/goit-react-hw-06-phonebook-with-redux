import { ADD_CONTACT, DELETE_CONTACT } from './constants';

export const contactReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...store, payload];
    case DELETE_CONTACT:
      return store.filter(({ id }) => id !== payload);
    default:
      return store;
  }
};

export const initialStore = [];
