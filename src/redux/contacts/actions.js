import { ADD_CONTACT, DELETE_CONTACT} from './constants';
import { nanoid } from 'nanoid';

export const addContact = payload => {
  return { type: ADD_CONTACT, payload: { id: nanoid(), ...payload } };
};

export const removeContact = payload => {
  return { type: DELETE_CONTACT, payload };
};


