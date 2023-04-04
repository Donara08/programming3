function matrixGenerator(matrixSize, grass, grassEater, predator, fire, wather, ) {
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

let matrix = matrixGenerator(20, 17, 7, 4, 4, 3)
let side = 30
///օբյեկտներ պահելու զանգվածներ
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var fireArr = []
var watherArr = []
// var boombArr = []
//var homeArr = []



function setup() {
        frameRate(15)
        createCanvas(matrix[0].length * side, matrix.length * side)
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

}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                        } else if (matrix[y][x] == 4) {
                                fill("orange")
                        } else if (matrix[y][x] == 5) {
                                fill("blue")
                        // } else if (matrix[y][x] == 6) {
                        //         fill("black")
                        } else {
                                fill("gray")
                        }
                        rect(x * side, y * side, side, side)

                }
        }



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
        // for (let i in homeArr) {
        //         homeArr[i].helper()
        // }

        console.log(grassArr.length);

}

