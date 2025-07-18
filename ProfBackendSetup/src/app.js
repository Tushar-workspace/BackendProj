import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';  // it is used to perform CRUD operation in user's cookies

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,   // giving info to the cors from where the request will come
    credential: true
}))

app.use(express.json({limit:"16kb"}))  // specifying the size of the request
app.use(express.urlencoded({extended:true}))  // urlencoded is used to tell the server to handle char and special char which comes from URL request and extended is used for nesting of more object data in the json req data
app.use(express.static("public")) //it is used to keep the req data,img etc in our local system.
app.use(cookieParser()) //it is used access the client's cookies and set it according to the needs


export { app };