const express = require('express')
const app = express();
const router = express.Router();
const productController = require('../controller/productsController')
router.get('/product/:id', productController.getpPoduct)
module.exports = router