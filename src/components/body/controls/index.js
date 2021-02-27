import React from "react";
import { Container, Button } from "./styles";
 
function GameControls() {

  const newFame = () =>{
    console.log("NEW GAME");
  };

  return <Container>
  <Button onClick={() => newFame()}>New game</Button>
  </Container>;
}
 
export default GameControls;