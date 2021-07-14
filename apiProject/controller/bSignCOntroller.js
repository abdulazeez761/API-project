const bsignrout = require('../router/bSignRouter')

exports.getBsign = (req , res)=>{
    res.render('../view/login')
}
exports.getBinfo = (req , res)=>{
    let info = {
        username: req.body.username, email: req.body.email ,password: req.body.pass
       }
       res.render('../view/accountInfo', {info:info})
}