const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const symptomsSchema = new Schema({ // all info we are going to store about contacts
  userId: { type: String, required: true },
//   coughing: { type: String, required: false },
//   nausea: { type: String, required: false },
//   dizziness: { type: String, required: false },
//   sorethroat: { type: String, required: false },
  symptoms: { type: Array, required: false },
  fever: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

const Record = mongoose.model('Record', symptomsSchema);

module.exports = Record;