const express=require("express");
const path=require("path");
const app=express();
app.use(express.urlencoded({extended: true}))
//app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json())
//app.set('views', path.join(__dirname, 'html _files'));
app.use('/assets',express.static(path.join(__dirname ,'assets' )))
// home/abood/projects/books/app.js
// /assets/home/abood/projects/books/assets
// home/abood/projects/books/images/aa.jpg

const port = 5000;
const homePage = require('./router/homeRouter')
const filterPage = require('./router/filterRouter')
const productPage = require('./router/productsRouter')
const Bsign = require('./router/bSignRouter')
const querySign = require('./router/queryRouter')
const apiHomeRouter = require('./router/apiHomeRouter')
const apiProductsRouter = require('./router/apiProductsRouter')
app.use(homePage)
app.use(filterPage)
app.use(productPage)
app.use(Bsign)
app.use(querySign)
app.use(apiHomeRouter)
app.use(apiProductsRouter)
//app.use(dataRouter)
app.listen(port,()=>{
console.log(`listening on ${port} `)
})