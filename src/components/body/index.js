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
      this.state = ({sudoku, difficulty, activeElement: {x: -1, y: -1, defaultValue: "", value: "", square: 0, isConst: false } });
  }

  componentDidUpdate(prevProps) {
    if (this.props.difficulty !== prevProps.difficulty) {
      const difficulty = this.props.difficulty;
      this.setState({sudoku: new Sudoku(9, difficulty), difficulty });
    }
  }

  handleChange = (event) => {
    const {sudoku} = this.state;
    const index = event.target.name;
    if(sudoku.body[index].isConst) return;
    if(String(sudoku.body[index].value) !== event.target.value){
      sudoku.body[index].defaultValue = "";
    }
    else sudoku.body[index].defaultValue = sudoku.body[index].value;
    
    this.setState({sudoku});
  } 

  onClickToCell = (event)=>{
    const {sudoku, activeElement} = this.state;
    const index = event.target.name;
    this.setState({activeElement: sudoku.body[index]});
  }

  startNewGame = (value) => {
    const { difficulty } = this.state;
    const sudoku = new Sudoku(9, difficulty);
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
    const {sudoku, activeElement} = this.state;
    return sudoku.getSquare( i + 1 ).map((element) =>
        <Cell 
         primary={element.square % 2}
         isConst={element.isConst}
         isValue={element.defaultValue === activeElement.defaultValue}
         isActive={activeElement.x === element.x || activeElement.y === element.y || activeElement.square === element.square}
         key={element.index}
         value={element.defaultValue || ""}
         name={element.index}
         maxLength="1"
         onChange={this.handleChange}
         onClick={this.onClickToCell}></Cell>

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