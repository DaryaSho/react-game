import styled from "styled-components";

export const Container = styled.div`
text-align: center;
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
caret-color: transparent;
width: 27px;
height: 27px; 
text-align: center;
font-size: 24px;
border: 0px;
margin: auto;
font-weight: ${props => props.isConst ? 600 : 400}; 
background: ${props => !props.primary ? "rgba(85, 238, 248, 0.24)" : "rgba(67, 238, 250, 0.65)"}; 
&:hover {
    opacity: 0.5;
}
&:focus{
    opacity: 0.5;
}
`;