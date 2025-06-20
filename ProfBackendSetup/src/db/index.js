import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connect.connection.host}`);
    } catch (error) {

        console.log("MongoDB Connection error : ",error);
        process.exit(1);
        
        
    }
}

export default connectDB;