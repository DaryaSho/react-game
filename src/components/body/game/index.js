import React from "react";
import { Sudoku } from "../../../model/sudoku";
import { Container, Square, Cell } from "./styles";
import PropTypes from "prop-types";

export class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = { sudoku: new Sudoku(9)};
        // debugger;
        console.log(props)
        if(props.isNewGame) this.getNewGame();
    }

    getNewGame = () => {
      this.setState({sudoku: new Sudoku(9)})
    }

    getTable = () => {
      const {sudoku} = this.state;
      return sudoku.getRow(0).map((element) =>
          <Square key = {element.x}>{this.getSquare(element.x)}</Square>
        );
    }

    getSquare = (i) => {
      const {sudoku} = this.state;
      return sudoku.getSquare( i + 1 ).map((element) =>
          <Cell primary={element.square % 2} key={element.index} defaultValue={element.value}></Cell>
        );
    };

    render() {
      return (<Container>{this.getTable()}</Container>);
    }
  }
  Game.propTypes = {isNewGame: PropTypes.bool};