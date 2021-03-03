import styled from "styled-components";
import {MainContainer} from "../styled";

export const Container = styled(MainContainer)`
height: 20%;
max-height: 100px;
padding-top: 20px;
font-size: 20px;
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

export const LifeContainer = styled.div`
width: 50%;
`;

export const Life = styled.img`
height: 50px;
margin-right: 5%;
`;
