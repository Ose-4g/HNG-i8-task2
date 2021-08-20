require('dotenv').config()
const express = require('express')
const connectToMongo = require('./utils/connectToMongo')
const responseRoutes = require('./routes/responseRoutes')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/static'))


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


//setting up the router
app.use('/response',responseRoutes)

app.get('/',(req,res,next)=>{
    return res.status(200).sendFile(
        __dirname+'/static/index.html'
    )
})


app.use("*",(req,res,next)=>{
    return res.status(404).json({
        status:"error",
        message:"specified endpoint does not exist on this server"
    })
})

startServer()

module.exports = app
