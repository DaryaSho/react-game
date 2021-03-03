import styled from "styled-components";
import {MainContainer} from "../styled";

export const Container = styled(MainContainer)`
/* text-align: center; */
/* width: 100%; */
/* border: 1px solid black; */
height: 20%;
min-height: 100px;
/* display: flex; */
/* font-family: 'Architects Daughter', cursive; */
`;

export const DifficultyContainer = styled.div`
flex-direction: column;
cursor: pointer;
margin-left: 20px;
font-weight: 600;
text-align: start;
`;

export const Button = styled.div`
cursor: pointer;
margin-left: 20px;
`;

export const DifficultyName = styled.div`
font-weight: ${props => props.isValue ? 600 : 400}; 
&:hover {
    opacity: 0.7;
}
`;
