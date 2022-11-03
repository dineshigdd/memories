import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRouter from './routes/post.js';

const app = express();
dotenv.config();


app.use( bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use( cors()); //cors need to be before app.use('/posts', postRouter);
app.use('/posts', postRouter);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;


mongoose.connect( CONNECTION_URL, {
    useNewUrlParser: true,   //to avoid warinings
    useUnifiedTopology: true  //to avoid warinings
}).then( () => app.listen( PORT, () => console.log( `server:${ PORT }`)))
  .catch( err => console.log( err.message ));

