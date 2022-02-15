const express = require('express');

const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router();

//get login page
router.get('/',
  (req, res) => res.status(200).json(res.locals)
);

//log in!
router.post('/', userController.findUser, sessionController.startSession,
  (req, res) => res.status(200).send('loggedIn!')
);


module.exports = router;
