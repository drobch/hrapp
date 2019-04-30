const mongoose = require("mongoose");
const config = require('../config/database');

var vacancySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    unique: true
  },
  vacancy: {
    type: String,
    required: true
  },
  description: {
    type: String,
    "default": ""
  },
  city: {
    type: String,
    "default": ""
  },
  org: {
    type: String,
    "default": ""
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  phone: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    "default": true
  }
});

const Vacancy = module.exports = mongoose.model('Vacancy', vacancySchema);

module.exports.getVacancyById = function (id, cb) {
  Vacancy.findById(id, cb)
};

module.exports.getAll = function (cb) {
  Vacancy.find({}, cb);
};

module.exports.createVacancy = function (newVacancy, cb) {
  newVacancy.save(cb)
};