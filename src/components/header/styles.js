import styled from "styled-components";

export const Container = styled.div`
text-align: center;
width: 100%;
border: 1px solid black;
height: 20%;
min-height: 100px;
display: flex;
`;

export const DifficultyContainer = styled.div`
flex-direction: column;
cursor: pointer;
margin-left: 20px;
text-align: start;
`;

export const Button = styled.div`
cursor: pointer;
margin-left: 20px;
`;

export const DifficultyName = styled.div`
&:hover {
    opacity: 0.7;
}
`;
