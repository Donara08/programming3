var socket = io()
var side = 30


function setup() {
        createCanvas(25 * side, 25 * side)


}
socket.on("Spring", function (data){
        weath = data
})
socket.on("Summer", function (data){
        weath = data
})
socket.on("Autumn", function (data){
        weath = data
})
socket.on("Winter", function (data){
        weath = data
})
var weath = "spring"
function changeColor(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                if (weath == "spring"){
                                fill("green")
                        } else if (weath == "summer"){
                                fill("#9FE2BF")
                        } else if (weath == "autumn"){
                                fill("#B7950B")
                        } else if (weath == "winter"){
                                fill("#FDFEFE")
                        }
                        }
                        else if(matrix[y][x] == 2){
                                fill("yellow")
                        } else if (matrix[y][x] == 3){
                                fill("red")
                        } else if(matrix[y][x] == 4){
                                fill("orange")
                        }else if(matrix[y][x] == 5){
                                fill("blue")
                        }else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)

                }
        }

}




socket.on("send matrix", changeColor);
function Winter() {
        socket.emit("winter");
    }
    function Summer() {
        socket.emit("summer");
    }
    function Spring() {
        socket.emit("spring");
    }
    function Autumn() {
        socket.emit("autumn");
    }
    function AddGrass(){
        socket.emit("addGrass");
    }
    function AddGrassEater(){
        socket.emit("addGrassEater");
    }
    function AddPredator(){
        socket.emit("addPredator");
    }
    function AddFire(){
        socket.emit("addFire");
    }
    function AddWather(){
        socket.emit("addWather");
    }
    function KillAll(){
        socket.emit("killAll");
    }


