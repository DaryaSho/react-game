import React, { useState, useEffect } from "react";
import {
 Container, DifficultyContainer, Button, DifficultyName, Life, LifeContainer,
   MusicContainer, MusicButton
} from "./styles";
import PropTypes from "prop-types";
import { DifficultyType } from "../../model/difficulty";

function Header(props) {

  const [difficulty, setDifficulty] = useState(JSON.parse(localStorage.getItem("difficulty") || "{}") || DifficultyType[0]);
  const [isOpenList, setOpenList] = useState(false);
  const [isPause, setPause] = useState(false);
    
  const displayDifficulty = () =>{
     return DifficultyType.map((dif) =>
        <DifficultyName key = {dif.index} onClick={()=>onChange(dif)} isValue={dif.name === difficulty.name} >{dif.name}</DifficultyName>
      );
  }
  const onChange = (dif) => {
    setDifficulty(dif);
    localStorage.setItem("difficulty", JSON.stringify(dif))
    const { onChangeDifficulty } = props;
    if(onChangeDifficulty) onChangeDifficulty(dif);
  }

  const displayLife = () => {
    const lives = [];
    for (let index = 0; index < props.numberOfLives; index++) {
      lives.push(index)
    }
    return lives.map((life) =>
    <Life key={life} src="life.svg" alt="life"></Life>);

  }
  const onClickMusic = () => {
    setPause(!isPause)
    props.onChangePause(isPause);
  }
  
  return <Container>
    <Button onClick={()=>setOpenList(!isOpenList)}>Difficulty</Button>
    <DifficultyContainer onClick={()=>setOpenList(!isOpenList)}>{isOpenList ? displayDifficulty() : difficulty.name }</DifficultyContainer>
    <LifeContainer>{displayLife()}</LifeContainer>
    <MusicContainer isPause={isPause}> Music:  
      <MusicButton onClick={()=>onClickMusic()} isPause={isPause} >{isPause ? "Off" : "On" }
      </MusicButton>
    </MusicContainer>
    </Container>;
}
Header.propTypes = {onChangeDifficulty: PropTypes.func, numberOfLives: PropTypes.number, onChangePause: PropTypes.func };
export default Header;