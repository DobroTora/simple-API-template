const express = require('express');

//set up express app
const app = express();

//listening to get request/callback responce to this request

app.get('/', function () {
    console.log('GET request');
})

//listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
})


