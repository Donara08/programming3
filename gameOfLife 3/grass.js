//szfsfsfssdfsefsef
class Grass extends LivingCreature{
    constructor(x,y){
        super(x,y)
        this.multiply = 0
        
    }
    



    mul(){
          this.multiply++
          let emptyCell = this.chooseCell(0)
          let newCell = random (emptyCell)
      
          if(newCell && this.multiply >= 5){
                     let newX  =   newCell[0]
                     let newY  =   newCell[1]

                     matrix[newY][newX] = 1

                     let grass = new Grass(newX,newY)
                     grassArr.push(grass)


                     this.multiply = 0


          }
          
    }

move(){
    let emptyCell = this.chooseCell(0)
    let newCell = random(emptyCell)

        if(newCell){
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 1
            matrix[this.y][this.x] = 0
            
            this.x = newX
            this.y = newY

            this.energy--

            if(this.energy < 0){
                this.die ()
            }
        }
 }
}

