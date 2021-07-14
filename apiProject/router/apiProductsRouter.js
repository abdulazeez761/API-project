const express = require('express')
const app = express();
const router = express.Router();
const apiCOntroller = require('../controller/productsApiController')
//router.get('/', homeController.getHome)
router.get('/data/productsData', apiCOntroller.getData)
module.exports = router