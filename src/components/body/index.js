import React from "react";
import { Container, SudokuContainer, Square, Cell } from "./styles";
import GameControls from "./controls";
import PropTypes from "prop-types";
import { Sudoku } from "../../model/sudoku";
 
export class Body extends React.Component {

  constructor(props) {
      super(props);
      debugger;
      this.state = {sudoku: null, text: 1, difficulty: props.difficulty}
  }

  handleChange = (event) => {
    debugger;
    const {sudoku} = this.state;
    sudoku.body[event.target.name].value = event.target.value;
    
    this.setState({sudoku});
  }

  startNewGame = (value) => {
    const sudoku = new Sudoku(9);
    debugger;
    this.setState({ sudoku, text: this.state.text + 1 });
  }

  getTable = () => {
    const {sudoku} = this.state;
    if(!sudoku)return;
    return sudoku.getRow(0).map((element) =>
        <Square key = {element.x}>{this.getSquare(element.x)}</Square>
      );
  }

  getSquare = (i) => {
    const {sudoku} = this.state;
    return sudoku.getSquare( i + 1 ).map((element) =>
        <Cell primary={element.square % 2}
         key={element.index}
         value={element.value}
        //  type="number"
         name={element.index}
         maxLength="1"
         pattern="\d [0-9]"
        //  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
         onChange={this.handleChange}></Cell>
      );
  };

  render() {
    const {text} = this.state;
    return (
    <Container>
      <SudokuContainer>{this.getTable()}</SudokuContainer>
      <GameControls startNewGame={this.startNewGame}/>
    </Container>);
  }
}
Body.propTypes = {difficulty: PropTypes.object};
export default Body;