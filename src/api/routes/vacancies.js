const express = require('express');
const router = express.Router();
const Vacancy = require('../models/vacancy');

router.get('/vacancies', (req, res, next) => {
  console.log('get');
  Vacancy.getAll((err, vacancies) => {
    if(err) throw err;
    res.send(vacancies);
  })
});

router.get('/vacancies/:id', (req, res, next) => {
  Vacancy.getVacancyById(req.params.id, (err, vacancy) => {
    if(err) throw err;
    res.send(vacancy);
  })
});

router.post('/vacancies', (req, res, next) => {
  let newVacancy = new Vacancy({
    vacancy: req.body.vacancy,
    description: req.body.description,
    city: req.body.city,
    org: req.body.org,
    salary: req.body.salary,
    phone: req.body.phone,
    active: req.body.active
  });
  
  Vacancy.createVacancy(newVacancy, (err, vacancy) => {
    if (err) {
      console.log(vacancy);
      res.json({success: false, msg: 'Failed to add vacancy'})
    } else {
      res.json(vacancy);
    }
  })
});

module.exports = router;
