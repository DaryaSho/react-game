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
        const count  = this.getRandomInt(30) + 10;
        for (let index = 0; index < count; index++) {
            
            this.swapRows();
            this.swapColumn();
        }
    }

    findIndexToSwap(index){
        const indentSize = this.getRandomInt(2)+1;
        const square = this.body[index].square-1;

        if(square*3+2=== index) return index - indentSize;
        else if(square*3+1 === index )return  indentSize === 0 ? index + 1: index - 1;
        else if(square*3 === index) return index + indentSize;
        return index;
    }

    swapColumn(){
        const index = this.getRandomInt(8);
        const index_2 = this.findIndexToSwap(index);
        for (let x = 0; x < this.size; x++) {
            const val = this.body[index+x*9].value;
            this.body[index+x*9].value = this.body[index_2+x*9].value;
            this.body[index_2+x*9].value = val;
            
        } 
    }
    
    swapRows(){
        const index = this.getRandomInt(8);
        const index_2 = this.findIndexToSwap(index);

        for (let x = 0; x < this.size; x++) {
            const val = this.body[index*9+x].value;
            this.body[index*9+x].value = this.body[index_2*9+x].value;
            this.body[index_2*9+x].value = val;  
        } 
    }
    
    createBase(){
        let index = 0
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                const number = Math.floor((x*Math.sqrt(this.size) + x/Math.sqrt(this.size) + y) % this.size + 1);
                this.body.push({x, y, value: number, square:  3 * Math.floor(x/3) + Math.floor(y/3) + 1, isConst: true, index}); 
                index++;
            }    
        }
    }

    setCell(x, y, value, isConst = false){
        return{x, y, value, square:  3 * Math.floor(x/3) + Math.floor(y/3) + 1, isConst }
    }
}