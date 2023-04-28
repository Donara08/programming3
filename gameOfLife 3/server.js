var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs");
const { ServerResponse } = require("http");
//const { kill } = require('process');
//const Predator = require("./predator");

app.use(express.static("."));

app.get("/", function (req, res) {
        res.redirect("index.html");
});


server.listen(3000, function () {
        console.log("server is run")
})

// matrix generator
function matrixGenerator(matrixSize, grass, grassEater, predator, fire, wather,) {
        var matrix = []
        ////  matrix սարքելու հատված
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([])
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0)
                }
        }

        // 1 -եր այսինքն խոտեր քցելու հատված մատռիքսում
        for (let i = 0; i < grass; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 1
        }
        //GrassEater 2

        for (let i = 0; i < grassEater; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 2
        }
        for (let i = 0; i < predator; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 3
        }
        for (let i = 0; i < fire; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 4
        }
        for (let i = 0; i < wather; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5
        }

        // for (let i = 0; i < boomb; i++) {
        //         let x = Math.floor(Math.random() * matrixSize)
        //         let y = Math.floor(Math.random() * matrixSize)
        //         matrix[y][x] = 6
        // }
        // for(let y = 0;y  < matrixSize;y++){
        //         for(let x = 0;x  < matrixSize;x++){
        //           if(matrix[y][x] == 0){
        //                 if(x == 4 && y == 1){
        //                         matrix[y][x]  = 5 
        //                    }
        //                    if(x == 4 && y == 2){
        //                         matrix[y][x]  = 5       
        //                    }
        //                    if(x == 4 && y == 3){
        //                         matrix[y][x]  = 5  
        //                    }
        //                    if(x == 4 && y == 4){
        //                         matrix[y][x]  = 5     
        //                    } if(x == 5 && y == 4){
        //                         matrix[y][x]  = 5     
        //                    } if(x == 6 && y == 4){
        //                         matrix[y][x]  = 5     
        //                    }if(x == 7 && y == 4){
        //                         matrix[y][x]  = 5     
        //                    }if(x == 7 && y == 3){
        //                         matrix[y][x]  = 5     
        //                    }
        //                    if(x == 7 && y == 2){
        //                         matrix[y][x]  = 5     
        //                    }
        //                    if(x == 7 && y == 1){
        //                         matrix[y][x]  = 5     
        //                    }
        //}
        //  }
        // }


        return matrix
}
//reys
matrix = matrixGenerator(20, 17, 7, 4, 4, 3)

io.sockets.emit("send matrix", matrix)


//moduls
grassArr = []
grassEaterArr = []
predatorArr = []
fireArr = []
watherArr = []

Grass = require("./grass")
Predator = require("./predator")
Fire = require("./fire")
GrassEater = require("./grassEater")
Wather = require("./wather")
clearInterval
//

function CreateObject() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pre = new Predator(x, y)
                                predatorArr.push(pre)
                        } else if (matrix[y][x] == 4) {
                                let fire = new Fire(x, y)
                                fireArr.push(fire)
                        } else if (matrix[y][x] == 5) {
                                let wather = new Wather(x, y)
                                watherArr.push(wather)
                                // } else if (matrix[y][x] == 6) {
                                //         let wather = new Boomb(x, y)
                                //         boombArr.push(boomb)       
                                // } else if (matrix[y][x] == 5) {
                                //         let home = new Home(x, y)
                                //         homeArr.push(home)
                        }


                }
        }
        io.sockets.emit("send matrix", matrix)
}


function game() {
        for (let i in grassArr) {
                grassArr[i].mul()
        }
        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }
        for (let i in predatorArr) {
                predatorArr[i].eat()
        }
        for (let i in fireArr) {
                fireArr[i].eat()
        }
        for (let i in watherArr) {
                watherArr[i].move()
        }
        io.sockets.emit("send matrix", matrix)
}

setInterval(game, 300);


//io.on("connection", function(){
//        CreateObject()
//})
var weath;
function Spring(){
        weath = "spring";
        io.sockets.emit("Spring", weath)
}
function Summer(){
        weath = "summer";
        io.sockets.emit("Summer", weath)
}
function Autumn(){
        weath = "autumn";
        io.sockets.emit("Autumn", weath)
}
function Winter(){
        weath = "winter";
        io.sockets.emit("Winter", weath)
}
function kill(){
        grassArr = []
        grassEaterArr = []
        predatorArr = []
        fireArr = []
        watherArr = []
        for (var y = 0; y < matrix.length; y++){
                for(var x = 0; x< matrix[y].lenght; x++){
                        matrix[y][x]=0

                }

        }
        io.sockets.emit("send matrix", matrix)
}
function AddGrass(){
        for (var i = 0; i < 7; i++) {
                var x = Math.floor(Math.random() * matrix[0].length)
                var y = Math.floor(Math.random() * matrix.length)
                if (matrix[y][x] == 0) {
                    matrix[y][x] = 1;
                    var gr = new Grass(x, y);
                    grassArr.push(gr);
                }
            }
            io.sockets.emit("send matrix", matrix);
        }
        function AddGrassEater() {
                let count = 0;
                for (var i = 0; i < 50; i++) {
                    var x = Math.floor(Math.random() * matrix[0].length)
                    var y = Math.floor(Math.random() * matrix.length)
                    if (count < 7) {
                        if (i < 30) {
                            if (matrix[y][x] == 0) {
                                count++;
                                matrix[y][x] = 2;
                                var grEater = new GrassEater(x, y);
                                grassEaterArr.push(grEater);
                            }
                        } else if (i >= 20) {
                                if (matrix[y][x] == 0 || matrix[y][x] == 1) {
                                    count++;
                                    matrix[y][x] = 2;
                                    var grEater = new GrassEater(x, y);
                                    grassEaterArr.push(grEater);
                                }
                            }
                        }
                
                
                    }
                
                    io.sockets.emit("send matrix", matrix);
                }                         
        function AddPredator (){
                for(var i = 0; i<9; i++){
                        var x = Math.floor(Math.random() * matrix[0].length)
                        var y = Math.floor(Math.random() * matrix.length)
                        if (matrix[y][x] == 0) {
                            matrix[y][x] = 3;
                            var preda = new Predator (x, y);
                            predatorArr.push(preda);
                        }
                    }
                    io.sockets.emit("send matrix", matrix);
                }       

        function AddFire (){
                for (var i = 0; i < 7; i++) {
                        var x = Math.floor(Math.random() * matrix[0].length)
                        var y = Math.floor(Math.random() * matrix.length)
                        if (matrix[y][x] == 0) {
                            matrix[y][x] = 4;
                            var fir = new Fire(x,y);
                            fireArr.push(fir);    
        }
}
io.sockets.emit("send matrix", matrix);
}

function AddWather() {
        for (var i = 0; i < 2; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 5;
                var wath = new Wather(x, y);
                watherArr.push(wath);
            }
        }
        io.sockets.emit("send matrix", matrix);
    }



io.on('connection', function (socket) {
        CreateObject();
        socket.on("spring", Spring);
        socket.on("summer", Summer);
        socket.on("autumn", Autumn);
        socket.on("winter", Winter);
        socket.on("killAll", kill);
        socket.on("addGrass", AddGrass);
        socket.on("addGrassEater", AddGrassEater);
        socket.on("addPredator", AddPredator);
        socket.on("addFire", AddFire);
        socket.on("addWather", AddWather);
      
    })
    
var statistics ={};
setInterval(function(){
        statistics.grass = grassArr.length;
        statistics.grassEater = grassEaterArr.lenght;
        statistics.predator = predatorArr.lenght;
        statistics.fire = fireArr.lenght;
        statistics.wather = watherArr.lenght;
        fs.writeFile("statistics.json", JSON.stringify(statistics),function(){

        })

}, 1000);