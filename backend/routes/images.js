// // creating a route
// const router = require('express').Router();
// const auth = require("../middleware/auth");
// // requiring the model
// const Image = require('../models/images.model');
// const multer = require('multer');

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}_${file.originalname}`)
//     },
//     fileFilter: (req, file, cb) => {
//         const ext = path.extname(file.originalname)
//         if (ext !== '.jpg' || ext !== '.png') {
//             return cb(res.status(400).end('only jpg, png are allowed'), false);
//         }
//         cb(null, true)
//     }
// })

// var upload = multer({ storage: storage }).single("file")

// router.post('/uploadImage', auth, async (req, res) => {

//     upload(req, res, err => {
//         if (err) {
//             return res.json({ success: false, err })
//         }
//         return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
//     })
// });

// // router.get('/all', auth, async (req, res) => {
// //     const contacts = await Contact.find({userId: req.user});
// //     res.json(contacts);
// // });

// // router.delete('/:id', auth, async (req, res) => {
// //   const contact = await Contact.findOne({userId: req.user, _id: req.params.id});
// //   if (!contact){
// //     return res.status(400).json({msg: "No contact found with this ID that belongs to the current user."});
// //   }
// //   const deletedContact = await Contact.findByIdAndDelete(req.params.id);
// //   res.json(deletedContact);
// // });

// module.exports = router; // standard in router files

// creating a route
const router = require('express').Router();
const auth = require("../middleware/auth");
const Image = require('../models/images.model');
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});

// router.post('/add', upload.single('image'), auth, async (req, res) => {
//     console.log(req.body, req.file);
// });

router.post('/upload', auth, async (req, res) => {
    try {
      const newImage = new Image({
        userId: req.user,
        imageUrl: req.body.imageUrl,
      });
      await newImage.save();
      res.json(newImage.imageUrl);
    } catch (err) {
      console.error('Something went wrong', err);
    }
});

router.get('/getLatest', auth, async (req, res) => {
    const getImage = await Image.findOne({userId: req.user}).sort({ _id: -1 });
    res.json(getImage.imageUrl);
});

module.exports = router;