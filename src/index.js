import express from 'express'
import dotenv from 'dotenv'
import Connection from './db/connection.js';

dotenv.config()
const app = express();
Connection();
const PORT = process.env.PORT || 8000 ;

app.listen(PORT ,()=>{
    console.log(`backend is runing on port ${PORT}`);

}) 