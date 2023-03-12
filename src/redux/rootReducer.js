import { combineReducers } from 'redux';

import { contactReducer } from './contacts/reducer';
import { filterReducer } from './filter/reducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
