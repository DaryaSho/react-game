import React from "react";
import { Container, SudokuContainer, Square, Cell } from "./styles";
import GameControls from "./controls";
import PropTypes from "prop-types";
import { Sudoku } from "../../model/sudoku";
 
export class Body extends React.Component {

  constructor(props) {
      super(props);
      const difficulty = props.difficulty;
      const sudoku = new Sudoku(9, difficulty);
      this.state = ({sudoku, difficulty });
  }

  componentDidUpdate(prevProps) {
    if (this.props.difficulty !== prevProps.difficulty) {
      const difficulty = this.props.difficulty;
      this.setState({sudoku: new Sudoku(9, difficulty), difficulty });
    }
  }

  handleChange = (event) => {
    debugger;
    const {sudoku} = this.state;
    sudoku.body[event.target.name].value = event.target.value;
    
    this.setState({sudoku});
  }

  startNewGame = (value) => {
    const { difficulty } = this.state;
    const sudoku = new Sudoku(9, difficulty);
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
        isConst={element.isConst}
         key={element.index}
         value={element.value || ""}
        //  type="number"
         name={element.index}
         maxLength="1"
         pattern="\d [0-9]"
        //  onkeypress="return event.charCode >= 48 && event.charCode <= 57"
         onChange={this.handleChange}></Cell>
      );
  };

  render() {
    return (
    <Container>
      <SudokuContainer>{this.getTable()}</SudokuContainer>
      <GameControls startNewGame={this.startNewGame}/>
    </Container>);
  }
}
Body.propTypes = {difficulty: PropTypes.object};
export default Body;