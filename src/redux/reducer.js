import { ADD_CONTACT, DELETE_CONTACT } from './constants';

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return { ...store, contacts: [...store.contacts, payload] };
    case DELETE_CONTACT:
      const newContacts = store.contacts.filter(({ id }) => id !== payload);
      return { ...store, contacts: newContacts };
    default:
      return store;
  }
};

export const initialStore = {
  contacts: [],
  filter: '',
};
