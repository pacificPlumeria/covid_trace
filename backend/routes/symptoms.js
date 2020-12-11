// creating a route
const router = require('express').Router();
const auth = require("../middleware/auth");
// requiring the model
const Record = require('../models/symptoms.model');

router.post('/add', auth, async (req, res) => {
  try{
    // const coughing = req.body.coughing; 
    // const nausea = req.body.nausea; 
    // const dizziness = req.body.dizziness; 
    // const sorethroat = req.body.sorethroat; 
    const symptoms = req.body.symptoms; 
    const fever = req.body.fever; 
    const date = req.body.date;

    if (!fever || !date){
      return res.status(400).json({msg: "Not all fields have been entered."});
    }

    const newRecord = new Record({
    //   coughing,
    //   nausea,
    //   dizziness,
    //   sorethroat,
      symptoms,
      fever,
      date,
      userId: req.user,
    });
    const savedRecord = await newRecord.save(); 
    res.json(savedRecord);
  } catch (err){
      res.status(500).json({error: err.message});
  }
});

// router.get('/all', auth, async (req, res) => {
//     const contacts = await Contact.find({userId: req.user});
//     res.json(contacts);
// });

// router.delete('/:id', auth, async (req, res) => {
//   const contact = await Contact.findOne({userId: req.user, _id: req.params.id});
//   if (!contact){
//     return res.status(400).json({msg: "No contact found with this ID that belongs to the current user."});
//   }
//   const deletedContact = await Contact.findByIdAndDelete(req.params.id);
//   res.json(deletedContact);
// });

module.exports = router; // standard in router files