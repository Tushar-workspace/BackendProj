// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path : "./env"
})



connectDB()  // it returning a promise that it will return something,that's why we r using catch n throw
.then(
    // before DB connectivity was done , now server has to listen the db to any specific port which can be taken from env or specify here
    ()=> {
        app.listen(process.env.PORT || 8080 , ()=> {
            console.log(`server is running on the port : ${process.env.PORT}`);
            
        })
    }  
)
.catch( (err) => {
    console.log("MongoDB connection failed !!! : ",err);
    
})








// First approach for DB connectivity



// import express from "express";

// const app = express();


// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//         app.on("error" , (error)=> {
//             console.log("ERR: " ,error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on the port ${process.env.PORT}`);
            
//         } )
//     } catch (error) {
//         console.error("Error: ", error)
//         throw error;
//     }
// })()