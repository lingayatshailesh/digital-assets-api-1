var express = require('express');
var router = express.Router();
let UC = require("../controller/user")

router.post('/signup', UC.userSignup);

router.post('/login', UC.userLogin);

router.get('/alldata', UC.sequre ,UC.userGetAllData);

router.get('/:id', UC.sequre ,UC.userIdFound);

router.patch('/:id', UC.sequre ,UC.userIdUpdate);

router.delete('/:id', UC.sequre ,UC.userIdDelete);

module.exports = router;
