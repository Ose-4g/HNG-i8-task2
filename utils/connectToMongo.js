const mongoose = require('mongoose')

const connectToMongo = async()=>{
    
    try{
        const conn = await mongoose.connect(DB, {

            useCreateIndex : true,
            useFindAndModify : false,
            useNewUrlParser : true,
            useUnifiedTopology : true
        }) 

        console.log(`Mongo.db successfully connected to ${conn.connection.host}`)
    }

    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectToMongo