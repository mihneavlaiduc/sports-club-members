import { combineReducers } from 'redux';
import addCardReducer from './add-card-reducer';
import idToEditCardReducer from './id-to-edit-card-reducer';

const allReducers = combineReducers({
  addCard: addCardReducer,
  cardToEdit: idToEditCardReducer
});

export default allReducers
