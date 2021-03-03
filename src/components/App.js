import React, { useState } from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { DifficultyType } from "../model/difficulty";
import { AppContainer } from "./styled";

function App() {
  const [difficulty, setDifficulty] = useState(JSON.parse(localStorage.getItem("difficulty") || "{}") || DifficultyType[0]);
  let [numberOfLives, setLife] = useState(3);
  const[isLose, setLose] = useState(false);
  const[pause, setPause] = useState(false);
  const[audio, setAudio] = useState( new Audio("melod.mp3"));

  const onChangeDifficulty = (name) => {
    setDifficulty(name);
    setLife(3);
  }

  const onChangePause = (isPause) => {
    debugger;
    setPause(isPause);
    if(isPause)audio.pause();
    else audio.play();
  }
  
  const onError = () => {
    setLife(--numberOfLives);
    alert(`${numberOfLives} lives left`);
    if(numberOfLives === 0) {setLose(true); alert("YOU LOSE!!!");}
  }

  return (
    <AppContainer className="App">
      <Header onChangeDifficulty={onChangeDifficulty} numberOfLives={numberOfLives} onChangePause={onChangePause}/>
      {!isLose && <Body difficulty={ difficulty } numberOfLives={numberOfLives} onError={onError}/>}
      <Footer />
    </AppContainer>
  );
}

export default App;
