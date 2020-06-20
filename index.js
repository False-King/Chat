const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const port = 8080

const app = express();
const appserver = http.Server(app);
const io = socketio(http);

app.get("/", function(request, response){
    response.send("Ola mundo");
});

app.get("/contatos", function(request, response){
    response.send("Esses são meus contatos");
});

const server = appserver.listen(port,function(){
    console.log("Listening")
});