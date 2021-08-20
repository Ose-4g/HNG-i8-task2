const Response = require('../models/Response')

exports.createNewResponse = async(req,res,next)=>{
    const {name,email,subject,message} = req.body

    if(!name || name.length==0)
    {
        return res.status(400).json({
            status:"error",
            message:"name is required"
        })
    }

    if(!email || email.length==0)
    {
        return res,status(400).json({
            status:"error",
            message:"email is required"
        })
    }

    if(!subject || subject.length==0)
    {
        return res.status(400).json({
            status:"error",
            message:"subject is required"
        })
    }

    if(!message || message.length==0)
    {
        return res.status(400).json({
            status:"error",
            message:"message is required"
        })
    }

    await Response.create({
        name,
        email,
        message,
        subject
    })

    return res.status(200).json({
        status:"success",
        message:"response saved succeessfully"
    })
}


