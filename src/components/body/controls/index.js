import React, {useState} from "react";
import { Container, Button, NumberContainer, Number } from "./styles";
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
    setSelectNumber(number);
    const { onChangeNumber } = props;
    if(onChangeNumber) onChangeNumber(number);
  }
  const displayNumbers = () =>{
    return numbers.map((number, index) =>
    <Number key = {index} isSelect={number === selectNumber} onClick={() => onClickNumber(number)}>{number}</Number>
  );
  }

  return <Container>
  <Button onClick={() => newGame()}>New game</Button>
  <NumberContainer>{displayNumbers()}</NumberContainer>
  </Container>;
}
GameControls.propTypes = {startNewGame: PropTypes.func, onChangeNumber: PropTypes.func};
export default GameControls;