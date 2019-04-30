import {
  LOAD_VACANCIES,
  NEW_VACANCY,
  DELETE_VACANCY,
  GET_VACANCY,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default (state = initialState, action) => {
  console.log('vacancyReducer: ', state);
  switch (action.type) {
    case LOAD_VACANCIES:
      return {
        ...state,
        items: action.payload,
      };
    case GET_VACANCY:
      console.log('REDUCEEEEER: ', action.payload)
      return {
        ...state,
        item: action.payload,
      };
    case NEW_VACANCY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};