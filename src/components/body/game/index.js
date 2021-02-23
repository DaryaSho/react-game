import React from 'react';
import { Sudoku } from '../../../model/sudoku';
import { Container, Square, Cell } from './styles';

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sudoku: new Sudoku(9) };
    };
    getSquare = (i) => {
      const {sudoku} = this.state;;
      return sudoku.getSquare(i+1).map((element) =>
          <Cell key={element.index}>{element.value}</Cell>
        );
    };

    getTable = () => {
      const {sudoku} = this.state;
      return sudoku.getRow(0).map((element) =>
          <Square  key={element.x}>{this.getSquare(element.x)}</Square>
        );
    };

    render() {
      return (<Container>{this.getTable()}</Container>);
    }
  }