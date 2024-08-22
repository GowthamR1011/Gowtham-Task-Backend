const { Router } = require('express');

const controller = require('../controllers/controller.js');
const { Route } = require('express');

const router = Router();

router.get('/',controller.stringLength);
router.post('/',controller.loginReq);

module.exports = router;