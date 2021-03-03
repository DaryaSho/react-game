import React, { useState } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { DifficultyType } from "../model/difficulty";
import { AppContainer } from "./styled";

function App() {
  const [difficulty, setDifficulty] = useState(DifficultyType[0]);
  const onChangeDifficulty = (name) => {
    console.log("onChangeDifficulty");
    setDifficulty(name);
  }
  return (
    <AppContainer className="App">
      <Header onChangeDifficulty={onChangeDifficulty}/>
      <Body difficulty={ difficulty }/>
      <Footer />
    </AppContainer>
  );
}

export default App;
