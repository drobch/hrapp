import { combineReducers } from 'redux';
import vacancyReducer from './vacancyReducer';

export default  combineReducers({
  vacancies: vacancyReducer
});