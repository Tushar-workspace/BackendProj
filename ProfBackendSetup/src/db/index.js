import mongoose from "mongoose";  // we require mongoose to connect to MongoDB atlas 
import { DB_NAME } from "../constants.js";

const connectDB = async () => {  // always try to wrap the DB connection using try catch method 
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
                //When await is encountered, it pauses the execution of the async function until the Promise it's waiting on (in this case, the promise returned by mongoose.connect()) either resolves successfully or rejects with an error.

                // mongoose.connect() performs network I/O to establish a connection to the MongoDB Atlas cluster.

                // Since this is a time-consuming operation, it returns a Promise that resolves once the connection is established.

                // MongoDB Atlas does not require you to pre-create a database name manually in the UI.

                // If you pass a database name in the connection URI (like /${DB_NAME}), MongoDB will accept it and create that database automatically — on first write.



        console.log(`\n MongoDB connected !! DB HOST in src/db/index : ${connect.connection.host}`);
    } catch (error) {

        console.log("MongoDB Connection error in src/db/index : ",error);
        process.exit(1);

            // process.exit(code) ends the Node.js process immediately, here process is the reference which is happening in the backend of the node  .

            // code = 0 means success.

            // code ≠ 0 (e.g., 1) means error/failure.
        
        
    }
}

export default connectDB;