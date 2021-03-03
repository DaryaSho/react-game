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
min-width: 320px;
width: 40%;
margin-right: 0;
`;

export const Square = styled.div`
display: flex;
flex-wrap: wrap;
width: 30%;
border: 1px solid;
margin: 2px;
`;

export const Cell = styled.input`
font-family: 'Architects Daughter', cursive;
caret-color: transparent;
cursor: grab;
width: 30%;
margin: 2px auto;
text-align: center;
font-size: 34px;
border: 0px;
color:  ${props => !props.isConst ? "rgba(54, 54, 54, 1)" : "rgb(0, 0, 0)"};
font-weight: ${props => props.isConst ? 800 : 400}; 
background: ${props => !props.isActive ? "rgba(213, 217, 214, 0.34)" : "rgba(11, 92, 29, 0.34)"}; 
${props => props.isValue ? "background: rgba(245, 123, 123, 0.42);" : ""}
&:hover {
    opacity: 0.5;
}
&:focus{
    opacity: 0.5;
}
`;
