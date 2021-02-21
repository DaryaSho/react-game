import React from 'react';
import { Sudoku } from '../../../model/sudoku';
import { Container, Row, Cell } from './styles';

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sudoku: new Sudoku() };
    };
    


    getColumn = (i) => {
      const {sudoku} = this.state;;
      return sudoku.getColumn(i).map((element) =>
          <Cell>{element.value}</Cell>
        );
    };

    getTable = () => {
      const {sudoku} = this.state;;
      return sudoku.getRow(0).map((element) =>
          <Row>{this.getColumn(element.x)}</Row>
        );
    };

    render() {
      return (<Container>{this.getTable()}</Container>);
    }
  }