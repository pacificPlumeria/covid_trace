// creating a route
const router = require('express').Router();
const auth = require("../middleware/auth");
// requiring the model
const Contact = require('../models/contacts.model');

router.post('/add', auth, async (req, res) => {
  try{
    const contactname = req.body.contactname; 
    const email = req.body.email; 
    const phonenumber = Number(req.body.phonenumber);
    //const date = Date.parse(req.body.date); 
    const date = req.body.date;

    if (!contactname || !email || !phonenumber || !date){
      return res.status(400).json({msg: "Not all fields have been entered."});
    }

    const newContact = new Contact({
      contactname,
      email,
      phonenumber,
      date,
      userId: req.user,
    });
    const savedContact = await newContact.save(); 
    res.json(savedContact);
  } catch (err){
      res.status(500).json({error: err.message});
  }
});

router.get('/all', auth, async (req, res) => {
    const contacts = await Contact.find({userId: req.user});
    res.json(contacts);
});

router.delete('/:id', auth, async (req, res) => {
  const contact = await Contact.findOne({userId: req.user, _id: req.params.id});
  if (!contact){
    return res.status(400).json({msg: "No contact found with this ID that belongs to the current user."});
  }
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  res.json(deletedContact);
});

module.exports = router; // standard in router files

// // first route: endpoint that handles incoming http get requests on the /exercises url path
// router.route('/').get((req, res) => {
//   // a mongoose method that is going to get a list of exercises from the mongodb atlas database.
//   Contact.find() // results are returned in JSON format
//     .then(contacts => res.json(contacts)) // after it finds, it gets and returns all the exercises from database in json format
//     .catch(err => res.status(400).json('Error: ' + err)); // error message
// });

/* // handles incoming http post requests
router.route('/add').post((req, res) => {
  const username = req.body.username; // username is part of request body so new username is assigned to username variable
  const contactname = req.body.contactname; // description is part of request body so new username is assigned to username variable
  const email = req.body.email; // duration is part of request body so new username is assigned to username variable
  const phonenumber = Number(req.body.phonenumber);
  const date = Date.parse(req.body.date); // date is part of request body so new username is assigned to username variable

  const newContact = new Contact({ // create new instance of exercise using the variables above
    username,
    contactname,
    email,
    phonenumber,
    date,
  });

  newContact.save()
  .then(() => res.json('Contact added!'))
  .catch(err => res.status(400).json('Error: ' + err));
}); */

/*   router.route('/:id').get((req, res) => { // just returns info about that exercise
    Contact.findById(req.params.id) // getting id from url and then finding exercise in database by id
      .then(contact => res.json(contact)) // return found exercise by json
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Contact.findByIdAndDelete(req.params.id)
      .then(() => res.json('Contact deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => { //route receives a json object that contains all properties
    Contact.findById(req.params.id)
      .then(contact => { // taking all info from received json object and assigning it to the fields that already exist
        contact.username = req.body.username;
        contact.contactname = req.body.contactname;
        contact.email = req.body.email;
        contact.phonenumber = Number(req.body.phonenumber);
        contact.date = Date.parse(req.body.date);
  
        contact.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  }); */