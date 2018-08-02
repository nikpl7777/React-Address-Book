/**
 * Global reducer
 */

import { combineReducers } from 'redux';
import contactsReducer from './contacts';
import filterReducer from './filter';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;