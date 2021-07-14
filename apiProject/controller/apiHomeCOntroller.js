//const dataController = require('../controller/dataController');
const homeModel = require('../model/homeMOdel');
exports.getData = (req , res, next )=>{
    homeModel.dataPromies().then(([rows , meta]) =>{
       
     
       
       
        res.status(200).json({
            data:rows
        })
    
    }).catch(err=>{ 
        console.log(err)    
    });
}