import {
  LOAD_VACANCIES,
  GET_VACANCY,
  NEW_VACANCY,
  DELETE_VACANCY,
} from './types';

export const loadVacancies = () => (dispatch) => {
  console.log('fetching');
  fetch('http://localhost:3000/vacancies')
  .then(res => res.json())
  //.then(ads => ads.filter((ad, i) => (i < 10)))
  .then(vacancies => dispatch({
    type: LOAD_VACANCIES,
    payload: vacancies
  }));
};

export const getVacancyById = (id) => (dispatch) => {
  console.log('I AM INNNNNNNN');
  fetch(`http://localhost:3000/vacancies/${id}`)
  .then(res => res.json())
  //.then(ads => ads.filter((ad, i) => (i < 10)))
      .then(vacancy => {
        console.log('IM INNNNNN:', vacancy)
        return dispatch({
          type: GET_VACANCY,
          payload: vacancy
        })
      });
};

export const createVacancy = (vacancyData) => (dispatch) => {
  fetch('http://localhost:3000/vacancies', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(vacancyData)
  })
  .then(res => res.json())
  .then(vacancy =>
    dispatch({
      type: NEW_VACANCY,
      payload: vacancy
    })
  );
};
