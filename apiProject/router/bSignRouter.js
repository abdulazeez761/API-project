const express = require('express');
const app = express();
const router = express.Router();
const bsignController = require('../controller/bSignCOntroller');

router.get('/login',bsignController.getBsign)
router.post('/signup',bsignController.getBinfo)

module.exports = router