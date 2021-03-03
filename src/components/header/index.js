import React, { useState } from "react";
import { Container, DifficultyContainer, Button, DifficultyName } from "./styles";
import PropTypes from "prop-types";
import { DifficultyType } from "../../model/difficulty";

function Header(props) {

  const [difficulty, setDifficulty] = useState(JSON.parse(localStorage.getItem("difficulty") || "{}") || DifficultyType[0]);
  // const [difficulty, setDifficulty] = useState(DifficultyType[0]);
  const [isOpenList, setOpenList] = useState(false);

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

  return <Container>
    <Button onClick={()=>setOpenList(!isOpenList)}>Difficulty</Button>
    <DifficultyContainer onClick={()=>setOpenList(!isOpenList)}>{isOpenList ? displayDifficulty() : difficulty.name }</DifficultyContainer>
    </Container>;
}
Header.propTypes = {onChangeDifficulty: PropTypes.func};
export default Header;