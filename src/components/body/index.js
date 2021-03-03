import React from "react";
import { Container, SudokuContainer, Square, Cell } from "./styles";
import GameControls from "./controls";
import PropTypes from "prop-types";
import { Sudoku } from "../../model/sudoku";
 
export class Body extends React.Component {

  constructor(props) {
      super(props);
      const localStorageSudoku = JSON.parse(localStorage.getItem("sudoku"));
      const sudoku = new Sudoku(9, localStorageSudoku.difficulty, localStorageSudoku.body);
      this.state = ({sudoku, activeElement: {x: -1, y: -1, defaultValue: 0, value: "", square: 0, isConst: false }, selectNumber: 0 });
  }

  componentDidUpdate(prevProps) {
    if (this.props.difficulty !== prevProps.difficulty) {
      const difficulty = this.props.difficulty;
      const sudoku = new Sudoku(9, difficulty)
      localStorage.setItem("sudoku", JSON.stringify(sudoku))
      this.setState({sudoku: sudoku });
    }
  }

  handleChange = (event) => {
    const {sudoku} = this.state;
    const index = event.target.name;
    const { onError } = this.props;
    if(sudoku.body[index].isConst) return;
    if(String(sudoku.body[index].value) !== event.target.value){
      sudoku.body[index].defaultValue = "";
      if(onError) onError()
      return;
    }
    sudoku.body[index].defaultValue = sudoku.body[index].value;
    localStorage.setItem("sudoku", JSON.stringify(sudoku));
    this.setState({activeElement: sudoku.body[index], sudoku})
  } 

  onClickToCell = (event)=>{
    const {sudoku, selectNumber} = this.state;
    const index = event.target.name;
    event.target.value = selectNumber;

    this.setState({activeElement: sudoku.body[index]});
    this.handleChange(event);
  }

  onChangeNumber = (selectNumber) => {
    this.setState({ selectNumber, activeElement: {x: -1, y: -1, defaultValue: 0, value: "", square: 0, isConst: false } });
  }

  startNewGame = (value) => {
    const { sudoku } = this.state;
    const newSudoku = new Sudoku(9, sudoku.difficulty);
    this.setState({ sudoku: newSudoku });
  }

  getTable = () => {
    const {sudoku} = this.state;
    if(!sudoku)return;
    return sudoku.getRow(0).map((element) =>
        <Square key = {element.x}>{this.getSquare(element.x)}</Square>
      );
  }

  getSquare = (i) => {
    const {sudoku, activeElement, selectNumber} = this.state;
    return sudoku.getSquare( i + 1 ).map((element) =>
        <Cell 
         primary={element.square % 2}
         isConst={element.isConst}
         isValue={(selectNumber && selectNumber === element.defaultValue) || (activeElement.defaultValue && element.defaultValue === activeElement.defaultValue)}
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
      <GameControls startNewGame={this.startNewGame} onChangeNumber={this.onChangeNumber}/>
    </Container>);
  }
}
Body.propTypes = {difficulty: PropTypes.object, onError: PropTypes.func, numberOfLives: PropTypes.number};
export default Body;