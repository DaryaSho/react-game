import React from "react";
import { Container, Button } from "./styles";
import PropTypes from "prop-types";
 
function GameControls(props) {

  const newGame = () =>{
    const { startNewGame } = props;
    if(startNewGame) startNewGame(true);
    console.log("NEW GAME");
  };

  return <Container>
  <Button onClick={() => newGame()}>New game</Button>
  </Container>;
}
GameControls.propTypes = {startNewGame: PropTypes.func};
export default GameControls;