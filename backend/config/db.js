const mongoose = require('mongoose');


const connectDB =  ()=>{
    try{
        const conn =  mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedToplogy:true,
            useFindAndModify:true,
        },()=>{
            console.log("Database Connection Successful");
        })
    }catch(error){
        console.log(error);
    }
};

module.exports = connectDB;