const express = require('express')

const app = express()



const PORT = process.env.PORT || 8005
app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})