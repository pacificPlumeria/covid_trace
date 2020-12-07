const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const imageSchema = new Schema({ // all info we are going to store about contacts
//   userId: { type: String, required: true },
//   imageUrl: { type: String, required: true },
// }, {
//   timestamps: true,
// });

const Image = mongoose.model(
  'image',
  mongoose.Schema({
    userId: String,
    imageUrl: String,
  })
);

// const Image = mongoose.model('image', imageSchema);

module.exports = Image;