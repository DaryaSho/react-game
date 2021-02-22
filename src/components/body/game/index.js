import React from 'react';
import { Sudoku } from '../../../model/sudoku';
import { Container, Row, Cell } from './styles';

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sudoku: new Sudoku() };
    };
    /// good
    getColumn = (i) => {
      const {sudoku} = this.state;;
      return sudoku.getColumn(i).map((element) =>
          <Cell key={element.index}>{element.value}</Cell>
        );
    };

    getTable = () => {
      const {sudoku} = this.state;;
      return sudoku.getRow(0).map((element) =>
          <Row  key={element.x}>{this.getColumn(element.x)}</Row>
        );
    };

    render() {
      return (<Container>{this.getTable()}</Container>);
    }
  }