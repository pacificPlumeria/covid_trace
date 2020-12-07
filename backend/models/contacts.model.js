const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({ // all info we are going to store about contacts
  userId: { type: String, required: true },
  contactname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phonenumber: { type: Number, required: true },
  //date: { type: Date, required: false },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;