import React, { useState, useEffect } from "react";
import { Container, DifficultyContainer, Button, DifficultyName, Life, LifeContainer} from "./styles";
import PropTypes from "prop-types";
import { DifficultyType } from "../../model/difficulty";

function Header(props) {

  const [difficulty, setDifficulty] = useState(JSON.parse(localStorage.getItem("difficulty") || "{}") || DifficultyType[0]);
  const [isOpenList, setOpenList] = useState(false);
  const [numberOfLives, setLife] = useState(props.numberOfLives);

  useEffect(
    () => {
      const lives = props.numberOfLives;
      return () => {
        setLife(lives);
      };
    },
    [props.numberOfLives],
  );
    
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
    for (let index = 0; index < numberOfLives; index++) {
      lives.push(index)
    }
    return lives.map((life) =>
    <Life key={life} src="life.svg" alt="life"></Life>);

  }

  return <Container>
    <Button onClick={()=>setOpenList(!isOpenList)}>Difficulty</Button>
    <DifficultyContainer onClick={()=>setOpenList(!isOpenList)}>{isOpenList ? displayDifficulty() : difficulty.name }</DifficultyContainer>
    <LifeContainer>{displayLife()}</LifeContainer>
    </Container>;
}
Header.propTypes = {onChangeDifficulty: PropTypes.func, numberOfLives: PropTypes.number};
export default Header;