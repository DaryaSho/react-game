import React, { useState } from "react";
import { Container, DifficultyContainer, Button, DifficultyName } from "./styles";
import PropTypes from "prop-types";
import { DifficultyType } from "../../model/difficulty";

function Header(props) {

   const [difficulty, setDifficulty] = useState(DifficultyType[0]);
   const [isOpenList, setOpenList] = useState(false);

  const displayDifficulty = ()=>{
     return DifficultyType.map((dif) =>
        <DifficultyName key = {dif.index} onClick={()=>onChange(dif)} >{dif.name}</DifficultyName>
      );
  }
  const onChange = (dif) => {
    setDifficulty(dif);
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