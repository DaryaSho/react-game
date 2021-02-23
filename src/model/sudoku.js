export class Sudoku {
    
    constructor(size) {
        this.body = [];
        this.size = size;

        this.create();
    }
       
    getRandomInt(max) {
        return Math.floor(Math.random(max) * Math.floor(max));
    }

    getColumn(index){
        return this.body.filter(element=> element.x === index);
    }

    getRow(index){
        return this.body.filter(element=> element.y === index);
    }

    getSquare(index){
        return this.body.filter(element=> element.square === index);
    }

    create(){
        this.createBase();
        this.swap();
        
    }

    swap(){
        const count  = this.getRandomInt(20) + 10;
        for (let index = 0; index < 3; index++) {
            
            this.swapRows();
        }
    }

    swapRows(){
        const index = this.getRandomInt(9);
        const indentSize = this.getRandomInt(2)+1;
        let index_2 = index;
        const square = this.body[index].square;
        if(square*3 > index)index_2 = index_2-indentSize;
        else if(square*3 < index)index_2 = index_2+indentSize;
        else if(square*3 === index)index_2 = indentSize===0? index_2+1: index_2-1; 
    
        for (let x = 0; x < this.size; x++) {
            const val = this.body[index*9+x].value;
            this.body[index*9+x].value = this.body[index_2*9+x].value;
            this.body[index_2*9+x].value = val;
            
        } 
    }

    createBase(){
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                const number = Math.floor((x*Math.sqrt(this.size) + x/Math.sqrt(this.size) + y) % this.size + 1);
                this.body.push({x, y, value: number, square:  3 * Math.floor(x/3) + Math.floor(y/3) + 1, isConst: true}); 
            }    
        }
    }

    setCell(x, y, value, isConst = false){
        return{x, y, value, square:  3 * Math.floor(x/3) + Math.floor(y/3) + 1, isConst }
    }
}