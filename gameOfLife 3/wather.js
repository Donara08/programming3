let LivingCreature = require("./LivingCreature")
module.exports = class Wather extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        //this.multiply = 0

    }

    move() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 1
            let grass = new Grass(newX, newY)
            grassArr.push(grass)



            this.x = newX
            this.y = newY

            this.energy--


        }

    }
}
