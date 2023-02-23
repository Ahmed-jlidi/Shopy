const mongoose = require("mongoose")
const crypto = require("crypto")
const uuidv1 = require("uuid");
const { timestamp } = require("rxjs")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:15,
        trim:true
        },
        password:{
            type:String,
            required:true
        },
        repassword:{
            type:String,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
        salt:String,
        

}, {timestamp : true})


module.exports = mongoose.model("user",userSchema)