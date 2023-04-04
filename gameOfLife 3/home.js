// class Home{
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//         this.energy = 5
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }


//     chooseCell(char){
//         let found = []


//         for(let i in this.directions){
//                          let x =   this.directions[i][0]
//                          let y =   this.directions[i][1]
//               if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
//                            if(matrix[y][x] == char ){
//                                    found.push(this.directions[i])
//                            }
//               }
//         }


//         return found

//    }

//    helper(){
//     let emptyCell = this.chooseCell(2)
//     let newCell = random(emptyCell)

//        if(newCell){
//             let newX = newCell[0]
//             let newY = newCell[1]


//             for(let i in predatorArr){
//                 if(newX + 1 == predatorArr[i].x && newY + 1 ==predatorArr [i].y) {
//                  predatorArr.splice(i,1)
//                 }
//        }

//                 matrix[newY][newX-1]  = 5
    
                

//             let home = new Home(newX,newY)

//             homeArr.push(home)


//        }
// }





// }