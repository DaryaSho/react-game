import React from "react";
import { Container } from "./styles";
import { Game } from "./game";
import GameControls from "./controls";
 
export class Body extends React.Component {

  constructor(props) {
      super(props);
      this.state = {isNewGame: false}
  }

  startNewGame = (value) => {
    this.setState({ isNewGame: value });
  }

  render() {
    const { isNewGame } = this.state;
    return (
    <Container>
      <Game startNewGame={this.startNewGame} />
      <GameControls startNewGame={this.startNewGame}/>
    </Container>);
  }
}
 
export default Body;