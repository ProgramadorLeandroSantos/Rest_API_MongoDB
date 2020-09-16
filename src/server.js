//imports
const express = require('express');
const server = express();
const PORT = 3001;
const routes = require('./routes/routes');
const dbConnection = require('../databases/config/connection');
const cors = require('cors');

//cors config as middleware
server.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    server.use(cors());
    next();
});

//usage
server.use(express.json());
server.use(routes);
server.listen(PORT,()=>console.log(`API is running on port : ${PORT}`));