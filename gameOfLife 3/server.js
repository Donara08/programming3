var express = require("express");
var app = express();
var server = require("socket.io")(server);
var io = require("socket.io")(server);
var fs = require("fs");
const { ServerResponse } = require("http");

app.use(express.static("."));

app.get("/",function (req, res){
    res.redirect("index.html");
});

server.listen(3000,function(){
    console.log("server is run")
})