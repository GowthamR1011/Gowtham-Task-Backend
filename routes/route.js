const { Router } = require('express');

const controller = require('../controllers/controller.js');
const { Route } = require('express');

const router = Router();

router.post('/loginReq',controller.loginReq);
router.post('/submit',controller.stringLength);
router.post('/signup',controller.signUp)
// router.post('/submit',controller.stringLength);
// router.post('/submitWithLogin',controller.stringLengthWithLogin)

module.exports = router;