import React, { useState } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { DifficultyType } from "../model/difficulty";
import { AppContainer } from "./styled";

function App() {
  const [difficulty, setDifficulty] = useState(JSON.parse(localStorage.getItem("difficulty") || "{}") || DifficultyType[0]);
  let [numberOfLives, setLife] = useState(3);
  const onChangeDifficulty = (name) => {
    console.log("onChangeDifficulty");
    setDifficulty(name);
  }

  const onError = () => {
    numberOfLives--;
    setLife(numberOfLives);
  }

  return (
    <AppContainer className="App">
      <Header onChangeDifficulty={onChangeDifficulty} numberOfLives={numberOfLives}/>
      <Body difficulty={ difficulty } numberOfLives={numberOfLives} onError={onError}/>
      <Footer />
    </AppContainer>
  );
}

export default App;
