import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Mongo Db connected");
}).catch((err) => {
    console.log(err)
});

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});