const User = require("../model/user")

exports.signup = (req,res) =>{
    const user = new User(req.body)
    user.save((err,Newuser)=>{
        if(err){
            return res.status(400).json({
                error  : err
            })
        }

        return res.json({
            message : "success",
            user,
            
        })
        console.log("done")
    })



}