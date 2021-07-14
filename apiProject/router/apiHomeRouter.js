const { urlencoded } = require('body-parser');
const express = require('express')
const app = express();
const router = express.Router();
const apiCOntroller = require('../controller/apiHomeCOntroller')
//router.get('/', homeController.getHome)
router.get('/data', apiCOntroller.getData)
module.exports = router