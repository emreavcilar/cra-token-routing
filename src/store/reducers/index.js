import { combineReducers } from 'redux';
import sessionReducer from 'store/reducers/shared/sessionReducer';

const reducers = combineReducers({
  sessionReducer
})

export default reducers;