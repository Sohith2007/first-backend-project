// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import connect_DB from "./db/index.js";

dotenv.config({
    path: './env'
})

// connect_DB();
const db = connect_DB();
















/*

this is one type of appraoch to connect database
import express from  "express";

const app = express();
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is lisenting${process.env.PORT}`);
        })
    }
    catch(error){
        console.log(error);
        throw err
    }
})()
*/