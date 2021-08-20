const mongoose = require("mongoose")
const validator = require('validator')

const responseSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"name is required"]
        },
        email:{
            type:String,
            required:[true,"Email is required"],
            validate:{
                validator:(mail)=>{
                    return validator.isEmail(mail)
                },
                message:"Email is invalid"
            }
        },
        subject:{
            type:String,
            required:[true,"subject is reuqired"],
        },
        message:{
            type:String,
            required:[true,"Message is reuqired"]
        }
    },
    {timestamps:true}
)

const Response = mongoose.model("Repsonse",responseSchema)

module.exports = Response