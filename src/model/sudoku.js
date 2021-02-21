export class Sudoku {
    
    constructor() {
        this.body = [];
        let index = 1;
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                this.body.push({x, y, value:index, square:  3 * Math.floor(x/3) + Math.floor(y/3) + 1, isConst: true });
                index++;   
            }
        }
    }

    getRow(index){
        return this.body.filter(element=> element.x === index);
    }

    getColumn(index){
        return this.body.filter(element=> element.y === index);
    }

    getSquare(index){
        return this.body.filter(element=> element.square === index);
    }

}