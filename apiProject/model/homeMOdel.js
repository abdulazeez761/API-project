const dataBase = require('./dataBase');
//const dataController = require('../controller/dataController')
exports.dataPromies = ()=>{
   return new Promise((resolv, reject)=>{
       resolv(dataBase.execute("SELECT * FROM data"))
       reject(Error('something went wrong'))
   })
}