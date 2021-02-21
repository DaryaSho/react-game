import React from 'react';
import { Sudoku } from '../../../model/sudoku';
import { Container, Row, Cell } from './styles';

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sudoku: new Sudoku() };
    };
    

    render() {
      console.log(this.state.sudoku);
      console.log(this.state.sudoku.getColumn(3));
      console.log(this.state.sudoku.getRow(4));
      console.log(this.state.sudoku.getSquare(5));
      return (<Container>table</Container>);
    }
  }