import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>
    {
        console.log('connected to DB');
    }).catch((err) => {
        console.log('error in connecting database')
    })
    
const app = express();

app.listen(3000, () => {
    console.log('server is running on the porttttttt');
}
);