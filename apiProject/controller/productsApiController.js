const productsModel = require('../model/productsModel');
const pushedData = [];
exports.getData = (req , res, next )=>{
    productsModel.dataPromies().then(([rows , meta]) =>{
       
     
      
       
        res.status(200).json({
            data:rows
        })
    
    }).catch(err=>{ 
        console.log(err)    
    });
}