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
          
        const elmnt = this.getRow(index);
        for (let x = 0; x < this.size; x++) {
            debugger;
            this.body[index*10+x].value = this.body[index_2*10+x].value;
            this.body[index_2*10+x].value= elmnt[x].value;
            
        }
        
        
        
    }

    createBase(){
        const numbers = [];
        let number = 1;
        for (let index = 0; index < this.size*this.size; index++) {
            numbers.push(number);
            if (number === this.size) number = 1;
                    else number++;
        }
        for (let x = 0; x < this.size; x++) {
                for (let y = 0; y < this.size; y++) {
                    this.body.push({x, y, value: numbers[0], square:  3 * Math.floor(x/3) + Math.floor(y/3) + 1, isConst: true}); 
                    numbers.shift();
                }
                numbers.push(numbers[0]);
                numbers.shift();
        }
    }

    setCell(x, y, value, isConst = false){
        return{x, y, value, square:  3 * Math.floor(x/3) + Math.floor(y/3) + 1, isConst }
    }
}