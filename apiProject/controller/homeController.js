const homeRout = require('../router/homeRouter')
//const dataController = require('../controller/dataController');
const homeModel = require('../model/homeMOdel');
//const dataControlle = dataController.getData;

exports.dataController = (req , res, next )=>{
    
       
     
       
        //console.log(pushedData) here return 2 arryes 
        res.render('../view/home')
    
   
}