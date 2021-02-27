import styled from "styled-components";

export const Container = styled.div`
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
border: 2px solid;
margin: auto;
`;
export const Cell = styled.div`
width: 30px;
height: 30px;
border: 1px solid black;
background: ${props => props.primary ? "rgba(85, 238, 248, 0.24)" : "rgba(67, 238, 250, 0.65)"};
margin: auto;
&:hover {
    /* background-color: rgba(67, 238, 250, 0.65); */
    opacity: 0.5;
    }
`;
