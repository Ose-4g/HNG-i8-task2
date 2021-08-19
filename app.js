require('dotenv').config()
const express = require('express')
const connectToMongo = require('./utils/connectToMongo')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT || 8005

const startServer = async()=>{
    await connectToMongo()
    app.listen(PORT,()=>{
        console.log(`
        #######################################
        #### App is listening on port ${PORT}#####
        #######################################`)
    })

}



app.use("*",(req,res,next)=>{
    return res.status(404).json({
        status:"error",
        message:"specified endpoint does not exist on this server"
    })
})

startServer()

module.exports = app
