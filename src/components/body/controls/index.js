import React, {useState} from "react";
import { Container, Button, NumberContainer, Number, Back } from "./styles";
import PropTypes from "prop-types";
 
function GameControls(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selectNumber, setSelectNumber] = useState(0);
  const newGame = () =>{
    const { startNewGame } = props;
    if(startNewGame) startNewGame(true);
    console.log("NEW GAME");
  };

  const onClickNumber = (number) => {
    const num = selectNumber === number ? 0 : number;
    setSelectNumber(num);
    const { onChangeNumber } = props;
    if(onChangeNumber) onChangeNumber(num);
  }
  const displayNumbers = () =>{
    return numbers.map((number, index) =>
    <Number key = {index} isSelect={number === selectNumber} onClick={() => onClickNumber(number)}>{number}</Number>
  );
  }
  const onClickBack = (number) => {
    const { onChangekBack } = props;
    if(onChangekBack) onChangekBack();
  }

  return <Container>
  <Button onClick={() => newGame()}>New game</Button>
  <NumberContainer>{displayNumbers()}</NumberContainer>
  {!props.isHistoryEmpty && <Back src="back.png" alt="back" width="50px" onClick={() => onClickBack()}></Back>}
  </Container>;
}
GameControls.propTypes = {
startNewGame  : PropTypes.func, onChangeNumber: PropTypes.func, onChangekBack : PropTypes.func,
  isHistoryEmpty: PropTypes.bool 
};
export default GameControls;