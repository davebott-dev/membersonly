require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.get('/api',(req,res)=> {
    res.json({'users': ['david','donald','henry']});
})

app.listen(8080, ()=> console.log('server is running on port 8080'));