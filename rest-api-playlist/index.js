const express = require('express');

//set up express app
const app = express();

//listening to get request/callback responce to this request

// app.get('/', function () {
//     console.log('GET request');
// })

//listening to get request/callback responce to this request
//res, req parameters are ending the request
//method route callback function

app.get('/api', function (req, res) {
    console.log('GET request');
    res.send({ name: 'debra' });
})

//listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
})


