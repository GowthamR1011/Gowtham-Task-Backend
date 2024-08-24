const { Router } = require('express');

const controller = require('../controllers/controller.js');
const { Route } = require('express');

const router = Router();

router.post('/loginReq',controller.loginReq);
router.post('/submit',controller.stringLength);

module.exports = router;