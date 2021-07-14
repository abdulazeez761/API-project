const express = require('express')
const app = express();
const router = express.Router();
const filterCOntroller = require('../controller/filterCOntroller')
router.get('/filter', filterCOntroller.getFIlter)
module.exports = router