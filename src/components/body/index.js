import React from 'react';
import { Container } from './styles';
import { Game }  from './game';
import GameControls from './controls';
 
function Body() {

  return <Container>
      <Game />
      <GameControls />
  </Container>;
}
 
export default Body;