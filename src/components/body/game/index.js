import React from 'react';
import { Sudoku } from '../../../model/sudoku';
import { Container, Row, Cell } from './styles';

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sudoku: new Sudoku() };
    };
    

    render() {
      return (<Container>table</Container>);
    }
  }