const express = require('express');
const testRouter = require('./routes/board-route');
const app = express();
const server=require('http').createServer(app);

var io =require('socket.io')(server);
io.on('connection',(socket) =>{
    console.log (`socket,id : ${socket.id}`)

})
var bodyParser = require('body-parser');
const { WebSocketServer } = require('ws');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(testRouter);

module.exports = app;
server.listen(443,()=>console.log('server listening at http://172.10.19.184:443'));
