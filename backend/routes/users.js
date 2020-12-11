// creating a route
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");
// requiring the model
let User = require('../models/user.model');

/* // first route: endpoint that handles incoming http get requests on the /users url path
router.route('/').get((req, res) => {
  // a mongoose method that is going to get a list of users from the mongodb atlas database.
  User.find() // results are returned in JSON format
    .then(users => res.json(users)) // after it finds, it gets and returns all the users from database in json format
    .catch(err => res.status(400).json('Error: ' + err)); // error message
}); */

// router.route('/add').post((req, res) => { // handles incoming http post requests
//   const username = req.body.username; // username is part of request body so new username is assigned to username variable
//   const password = req.body.password;

//   const newUser = new User({username, password}); // create new instance of user using the username

//   newUser.save() //username is saved to the database using the save method
//     .then(() => res.json('User added!')) // return users added in json
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// ADDED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//router.route('/add').post(async (req, res) => { // handles incoming http post requests
router.post('/add', async (req, res) => {
  try{
    // const username = req.body.username; // username is part of request body so new username is assigned to username variable
    // const password = req.body.password;
    // const passwordCheck = req.body.passwordCheck;
    // destructuring all of the fields out of the request object into variables
    let {username, password, passwordCheck} = req.body;

    if (!username || !password || !passwordCheck){
      return res.status(400).json({msg: "Not all fields have been entered."});
    }
    if (password.length < 5)
      return res.status(400).json({msg: "The password needs to be at least 5 characters long."});
    if (password != passwordCheck)
      return res.status(400).json({msg: "Enter the same password twice for verification."});
    
    const existingUser = await User.findOne({username: username});
    if (existingUser){
      return res.status(400).json({msg: "An account with this username already exists."});
    }

    const salt = await bcrypt.genSalt();
    //returns complete gibberish
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({username, 
      password : passwordHash
    });
    const savedUser = await newUser.save(); 
    res.json(savedUser);

  } catch (err){
      res.status(500).json({error: err.message});
  }
});

router.post('/login', async (req, res) => {
  try{
    const {username, password} = req.body;

    //validate
    if (!username || !password){
      return res.status(400).json({msg: "Not all fields have been entered."});
    }

    const user = await User.findOne({username: username});
    if(!user){
      return res.status(400).json({msg: "No account with this username has been registered."});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
      return res.status(400).json({msg: "Invalid credentials."});
    }

    // token stores which user has been logged in by using unique id assigned to an object in the database
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id
      },
    })

  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.delete('/delete', auth, async (req, res) => {
  try{
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try{
    const token = req.header("x-auth-token");
    if (!token){
      return res.json(false);
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified){
      return res.json(false);
    }
    const user = await User.findById(verified.id);
    if(!user){
      return res.json(false);
    }
    return res.json(true);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.get('/', auth, async (req, res) => {
  // gets a single logged in user
  const user = await User.findById(req.user);
  res.json({
    id: user._id,
  });
});

module.exports = router; // standard in router files