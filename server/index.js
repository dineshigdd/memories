import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use( bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use( cors());

const CONNECTION_URL = 'mongodb+srv://dineshigdd:pmkbandara@cluster0.sogsk.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;


mongoose.connect( CONNECTION_URL, {
    useNewUrlParser: true,   //to avoid warinings
    useUnifiedTopology: true  //to avoid warinings
}).then( () => app.listen( PORT, () => console.log( `server:${ PORT }`)))
  .catch( err => console.log( err.message ));

