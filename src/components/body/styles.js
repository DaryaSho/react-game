import styled from "styled-components";
import {MainContainer} from "../styled";

export const Container = styled(MainContainer)`
display: flex;
justify-content: space-around;
`;

export const SudokuContainer = styled.div`
justify-content: center;
align-items: center;
margin: auto;
display:flex;
flex-wrap: wrap;
width: 320px;
`;

export const Square = styled.div`
display: flex;
flex-wrap: wrap;
width: 100px;
height: 100px;
border: 1px solid;
margin: 2px;
`;

export const Cell = styled.input`
font-family: 'Architects Daughter', cursive;
caret-color: transparent;
cursor: grab;
width: 27px;
height: 27px; 
text-align: center;
font-size: 24px;
border: 0px;
margin: auto;
font-weight: ${props => props.isConst ? 800 : 400}; 
background: ${props => !props.isActive ? "rgba(85, 238, 248, 0.24)" : "rgba(67, 238, 250, 0.65)"}; 
${props => props.isValue ? "background: rgba(105, 102, 255, 0.24);" : ""}

&:hover {
    opacity: 0.5;
}
&:focus{
    opacity: 0.5;
}
`;
